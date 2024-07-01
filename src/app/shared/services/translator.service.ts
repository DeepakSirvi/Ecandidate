import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranslatorService {

 
//   constructor(private http:HttpClient) { }

//   async replaceNodeText(node:any,selectedLanguage:string) {
//     if (node.nodeType === Node.TEXT_NODE) {
//       let originalText = node.textContent.trim();
//       let translatedText =  await this.translateText(originalText, selectedLanguage);// Implement translateText function as needed
//       node.textContent = translatedText;
//     }
//   }
  
//   selectedLanguage:any='en';
//   // Main function to start translation process
//  translateHTML() {
//  this.selectedLanguage=localStorage.getItem('language');
//   const stack = [document.body]; // Start traversal from the body element

//   while (stack.length > 0) {
//     let currentNode:any = stack.pop();

//     // Process current node
//     this.replaceNodeText(currentNode,this.selectedLanguage);

//     // Push child nodes onto the stack for traversal
//     if (currentNode.childNodes.length > 0) {
//       for (let i = currentNode.childNodes.length - 1; i >= 0; i--) {

//         if(currentNode.childNodes[i].id!='languageDropdown')
//         stack.push(currentNode.childNodes[i]);
//       }
//     }
//   }
// }

  
//  translateText(text: string, targetLang: string): Promise<string> {
//   const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`;
//   return this.http.get(url)
//     .toPromise()
//     .then((response: any) => {
//       if (response && response.length > 0 && response[0].length > 0 && response[0][0].length > 0) {
//         return response[0][0][0];
//       }
//       return text; // Return original text if translation fails
//     })
//     .catch((error: any) => {
//       console.error('Error translating text:', error);
//       return text; // Return original text on error
//     });
// }
}
