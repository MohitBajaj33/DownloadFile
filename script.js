const fileinput = document.querySelector("input");
const  downloadBtn = document.querySelector("button");

downloadBtn.addEventListener("click" ,(e)=>{
     e.preventDefault(); // preventing from submitting 
     downloadBtn.innerText='Downloading file...';
     fetchfile(fileinput.value);
})

function fetchfile(url){
    // fetching file & returning response as blob
    fetch(url).then(res => res.blob()).then(file=>{
        // URL.createObjectURL create a url of passed object

        let tempurl = URL.createObjectURL(file);
        let atag= document.createElement("a");
        atag.href=tempurl; // passing tempurl as herf value of <a tag>
        atag.download =url.replace(/^.*[\\\/]/,''); // passing filename as downlod value of <a> tag
        document.body.appendChild(atag); // adding <a> tag inside body
        atag.click(); // clicking <a> tag so the  file download
        atag.remove(); // removing <a> tag once file downloaded
        URL.revokeObjectURL(tempurl);
        downloadBtn.innerText='Download file';
    }).catch(()=>{
        downloadBtn.innerText='Download file';
        alert("Download faild..");
});
}