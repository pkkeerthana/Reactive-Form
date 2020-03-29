import {Pipe,PipeTransform} from '@angular/core';

@Pipe({
    name:'languagePipe'
})
export class LanguagePipe implements PipeTransform{

    transform(value:string, language:string):string{
        console.log(language);
        if(language=='English'){
            return 'Enter the ClientID and press GO!';
        }
        else{
            if(language=='Hindi'){
                return 'क्लाइंट आईडी डालें और गो प्रेस करें';
            }
            else{
                if(language=='Malayalam')
                return 'ക്ലയന്റ് ഐഡി നൽകി ബട്ടൺ-ഗോ അമർത്തുക';
            }
        }
        
    }
}