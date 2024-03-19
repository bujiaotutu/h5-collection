const fs = require('fs');  
const path = require('path');  
  
export function readFilesInDir(dir, fileList = []) {  
  const files = fs.readdirSync(dir);  
  
  files.forEach(file => {  
    const fullPath = path.join(dir, file);  
    const stats = fs.lstatSync(fullPath);  
  
    if (stats.isDirectory()) {  
      // 如果是目录，则递归读取该目录下的文件  
      readFilesInDir(fullPath, fileList);  
    } else {  
      // 如果是文件，则添加到文件列表中  
      fileList.push(fullPath);  
    }  
  });  
  
  return fileList;  
}  
  
export default readFilesInDir