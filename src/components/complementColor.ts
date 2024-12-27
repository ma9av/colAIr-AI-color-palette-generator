import tinycolor from 'tinycolor2';

function findComplementOfHex(hexColor: string){
    const complement = tinycolor(hexColor).complement()
    const contrastRatio = tinycolor.readability(hexColor, complement.toHexString());

    if (contrastRatio < 4.5){
        const adjustedColor = tinycolor(complement).brighten(20).saturate(30);
        return adjustedColor.toHexString();
    }
    
    return complement.toHexString();

}


export default findComplementOfHex;