import Image from "next/image";
export default function StockCircle({data}) {
    const urlArray = ["/greenCircle.png", "/redCircle.png", "/amberCircle.png", "/greyCircle.png"];
    var url;
    if (data.stock <= 10) {
        url = urlArray[1]
    } else if (data.stock <= 50) {
        url = urlArray[2]
    } else  if(data.stock > 50){
        url = urlArray[0]
    } else {
        url = urlArray[3]
    }
    return (
        <>
        <td>
            <Image alt="Circle" src={url} height="20px" width="20px"></Image>
        </td>
        </>
    )
}