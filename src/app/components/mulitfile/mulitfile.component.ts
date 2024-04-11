import { Component } from '@angular/core';

@Component({
  selector: 'app-mulitfile',
  templateUrl: './mulitfile.component.html',
  styleUrls: ['./mulitfile.component.scss']
})
export class MulitfileComponent {

allFiles:any[] = []
progress:number=0

onFileChanges(event:any){
 if(event.target instanceof HTMLInputElement)
 {
  const file = ((event.target as HTMLInputElement)?.files || [])[0];
  this.allFiles.push(file);
  console.log(file);
  
  const reader = new FileReader();
  reader.onload = (e:any)=>{ 
    this.progress = Math.round((e.loaded / file.size)*100)
  }
  reader.readAsDataURL(file);
  (event.target as HTMLInputElement).value = '';
 }
}

bytesToKB(bytes: number): number {
  const data = parseFloat((bytes / 1024).toFixed(2))
  return data;
}

removeFile(index: number) {
  this.allFiles.splice(index, 1);
}


}
