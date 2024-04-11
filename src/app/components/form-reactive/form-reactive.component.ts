import { Component,ElementRef,ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { PdfGenerateService } from 'src/app/services/pdf-generate.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { Observable, from } from 'rxjs';



@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.scss']
})
export class FormReactiveComponent {

  obs : number =0;
  collapseOne: boolean = true;
  constructor(private modalService:NgbModal,
    private pdfService:PdfGenerateService,
    private matIconRegistery:MatIconRegistry,
    private sanitizer:DomSanitizer)
  {
    matIconRegistery.addSvgIcon('crab',sanitizer.bypassSecurityTrustResourceUrl('assets/svg/crab.svg'))
    matIconRegistery.addSvgIcon('github',sanitizer.bypassSecurityTrustResourceUrl('assets/svg/github.svg'))
    matIconRegistery.addSvgIcon('linkedIn',sanitizer.bypassSecurityTrustResourceUrl('assets/svg/linkedin.svg'))
    matIconRegistery.addSvgIcon('letter',sanitizer.bypassSecurityTrustResourceUrl('assets/svg/letter.svg'))
    matIconRegistery.addSvgIcon('objective',sanitizer.bypassSecurityTrustResourceUrl('assets/svg/objective.svg'))
    matIconRegistery.addSvgIcon('skills',sanitizer.bypassSecurityTrustResourceUrl('assets/svg/skills.svg'))
    matIconRegistery.addSvgIcon('projects',sanitizer.bypassSecurityTrustResourceUrl('assets/svg/projects.svg'))
    matIconRegistery.addSvgIcon('acheivements',sanitizer.bypassSecurityTrustResourceUrl('assets/svg/acheivements.svg'))
    matIconRegistery.addSvgIcon('education',sanitizer.bypassSecurityTrustResourceUrl('assets/svg/education.svg'))
  }

  @ViewChild('skillModal') skillmodal:ElementRef;
  @ViewChild('projectModal') projectmodal:ElementRef;
  @ViewChild('education') educationModal:ElementRef;
  @ViewChild('achievements') achievementModal:ElementRef;
  @ViewChild('contentToConvert',{static:false}) contentToConvert:ElementRef
  @ViewChild('resume',{static:false}) resume:ElementRef ;
  

  isPopupVisible:boolean = false;
  FaTrash = faTrash
  FaPencil = faPencil
  FaPhone = faPhone
  editProjectId:any
  accentColor:string="#000000"


  userform = new FormGroup({
    firstName: new FormControl("",[Validators.required,Validators.pattern('[a-zA-Z ]*'),Validators.minLength(3)]),
    lastName: new FormControl("",[Validators.required,Validators.pattern('[a-zA-Z ]*'),Validators.minLength(3)]),
    profileImage:new FormControl(""),
    dob:new FormControl("",[Validators.required]),
    email: new FormControl("",[Validators.required,Validators.email]),
    phoneNumber: new FormControl("",Validators.required),
    objective:new FormControl(""),
    education:new FormArray([]),
    links:new FormGroup({
      github: new FormControl(""),
      linkedIn:new FormControl("")
    }),
    skills: new FormArray([]),
    projects:new FormArray([]),
    achievements:new FormArray([])
  });

   projectGroup = new FormGroup({
    projectName : new FormControl(""),
    projectDescription: new FormControl(""),
    yearOfCompletiton:new FormControl("")
  });

  educationGroup = new FormGroup({
    instituteName: new FormControl("",Validators.required),
    passOutYear : new FormControl("",Validators.required),
    grades:new FormControl("",[Validators.required,Validators.pattern('[0-9]*')])
  })


  skillControl = new FormControl("");
  achievementControl = new FormControl("",Validators.required);

  ngOnInit()
  {
    var obj = from([1,2,3,4,5,6]);
    setTimeout(()=>{
    obj.subscribe((data)=>{
        this.obs = data;
    }) },1000)
  }

  getSkills() {
    return this.userform.get("skills") as FormArray;
  }

  getProjects()
  {
    return this.userform.get("projects") as FormArray
  }

  onFormSubmit()
  {
    console.log(this.userform);   
  }
  openSkillPopup(){
    this.modalService.open(this.skillmodal,{centered:true,backdrop:'static'});
    this.isPopupVisible = !this.isPopupVisible
  }
  closeSkillPopup()
  {
    this.modalService.dismissAll();
    this.isPopupVisible = !this.isPopupVisible
  }

  openProjectPopup(){
    this.modalService.open(this.projectmodal,{centered:true,backdrop:'static'})
  }
  closeProjectPopup(){
    this.modalService.dismissAll()
    this.projectGroup.reset()
  }

  openEducationPopup()
  {
      this.modalService.open(this.educationModal,{centered:true,backdrop:'static'})
  }

  closeEducationPopup()
  {
    this.modalService.dismissAll()
  }
  openAchievementPopup()
  {
    this.modalService.open(this.achievementModal,{centered:true,backdrop:'static'});
  }

  closeAchievementPopup()
  {
    this.modalService.dismissAll()
  }



  addSkill() 
  {
    
    this.getSkills().push(new FormControl(this.skillControl.value))
    this.skillControl.reset();

  }
  
  deleteSkill(index : number)
  {
    this.getSkills().removeAt(index)
  }

  generatePdf()
  {
    const startId = 'contentToConvert';
    this.pdfService.exportToPdf(startId);
  }

  addProject(){
    console.log(this.editProjectId);
    
    if(this.editProjectId !== undefined)
    {
      this.editProject();
    }
   else{
    const formData = {
      projectName : this.projectGroup.value.projectName,
      projectDescription :this.projectGroup.value.projectDescription,
      yearOfCompletiton:this.projectGroup.value.yearOfCompletiton
    }
    this.getProjects().push(new FormControl(formData))
    this.projectGroup.reset()
   }
  }

  deleteProject(index:number){
    this.getProjects().removeAt(index);
  }

  selectProject(project:any,index:number){
    this.openProjectPopup();
    this.projectGroup.patchValue({
      projectName:project.projectName,
      projectDescription:project.projectDescription,
      yearOfCompletiton:project.yearOfCompletiton
    }) ;
    this.editProjectId = index
  }

  editProject(){
    const editProject = this.projectGroup.value;
    const projectArray = this.getProjects() as FormArray;
    console.log("Selected Project :",editProject);
    console.log("Caught Project :",projectArray.at(this.editProjectId));

    projectArray.at(this.editProjectId).setValue(editProject);
    this.editProjectId=""
    this.closeProjectPopup()
  }

  getEducation()
  {
    return this.userform.get("education") as FormArray;
  }

  addEducation()
  {
    const formData = {
      instituteName : this.educationGroup.value.instituteName,
      passOutYear: this.educationGroup.value.passOutYear,
      grades: this.educationGroup.value.grades
    }
    this.getEducation().push(new FormControl(formData));
  }

  getAchievements()
  {
    return this.userform.get("achievements") as FormArray;
  }

  addAchievements()
  {
    this.getAchievements().push(this.achievementControl);
  }

  deleteAchievement(index:number)
  {
    this.getAchievements().removeAt(index)  
  }

  changeAccentColor(e:Event)
  { 
    const inputElement = e.target as HTMLInputElement;
    const hexCode = inputElement.value;
    this.accentColor = hexCode
  }



}
