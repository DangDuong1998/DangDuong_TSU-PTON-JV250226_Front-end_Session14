let count=1;
const studentsList = [];
let option;
let nameInput;
let ageInput;
let idInput;
let student;
function addStudent(name,age,id){
    return {
        name,
        age,
        id,
    }
}
while(true){
    option = +prompt(`Chọn chức năng:
        1. Thêm sinh viên mới
        2. Hiển thị danh sách sinh viên
        3. Xóa sinh viên theo ID`);
        if(option===0){
            break;
        }
        else{
            switch(option){
                case 1:
                    nameInput=prompt('Nhập tên sinh viên cần thêm');
                    if(nameInput===null){
                        break;
                    }
                    ageInput=prompt('Nhập tuổi sinh viên cần thêm');
                    if(ageInput===null){
                        break;
                    }
                    else{
                        while(true){
                            let check = true;
                            idInput=prompt('Nhập mã số sinh viên cần thêm');
                            studentsList.forEach((stu) => {
                                if(stu.id === idInput){
                                    alert(`Số ID ${idInput} đã tồn tại!!!`);
                                    check = false;
                                }
                            })
                            if(check === true){
                                break;
                            }
                        }
                        student=addStudent(nameInput,ageInput,idInput);
                        studentsList.push(student);
                        break;
                    }
                    
                case 2:
                    let mess='';
                    studentsList.forEach((stu,index) => { 
                        mess+=` ${index+1}.${stu.name} - ${stu.age} - ${stu.id} \n` ;
                    });
                    if(mess===''){
                        alert('Danh sách trống!!!');
                    }
                    else{
                        alert(mess);
                    }
                    
                    break;
                case 3:
                    while(true){
                        idInput=prompt('Nhập mã số sinh viên xóa');
                        if(idInput===null){
                            break;
                        }
                        else{
                            let toDelete =  studentsList.findIndex(function(stu){
                                return stu.id === idInput;
                            });
                            if (toDelete!== -1){
                                let deleteIdName = studentsList[toDelete];
                                studentsList.splice(toDelete,1);
                                alert(`Đã xóa sinh viên có số ID${idInput}
Thông tin chi tiết sinh viên đã xóa: 
${deleteIdName.name}
${deleteIdName.age}
${deleteIdName.id}`);
                            }
                            else{
                                alert(`Sinh viên có số ID: ${idInput} không tồn tại!!!`);
                            }
                    break;
                        }
                    }
                    

            }

        }
 
}
