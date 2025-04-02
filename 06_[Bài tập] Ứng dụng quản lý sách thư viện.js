const bookList=[];
let book;
function addBook(bookID, bookName, bookYear,){
    return {bookID, bookName, bookYear,}
};
while(true){
  let menu = prompt(`--- Quản Lý Sách ---

1. Thêm sách mới

2. Hiển thị danh sách sách

3. Tìm kiếm sách theo tên

4. Xóa sách theo ID

5. Thoát chương trình

Nhập lựa chọn của bạn:`);
    if(menu===null){
        break;
    }
    menu = Number(menu);
    if(menu ===5){
        break;
    }
    else{
        switch(menu){
            case 1:
                let inputCheck;
                while(true){
                    bookID=prompt('Nhập ID sách cần thêm: ');
                    if(bookID===null){
                        inputCheck=false;
                        break;
                        
                    }
                    else if(bookID===''){
                        alert('Hãy nhập gì đó!!!');
                    }
                    else{
                        let check=false;
                        bookList.forEach(function(id){
                        if(id.bookID === bookID){
                            check = true;
                        } 
                        })
                        if(check===true){
                            alert(`Sách với ID: ${bookID} đã tồn tại!!!`)
                        }
                        else{
                            inputCheck=true;
                            break;
                        }
                    }
                    
                }
                while(true && inputCheck===true){
                    bookName=prompt('Nhập tên sách cần thêm: ');
                    if(bookName===null){
                        inputCheck=false
                        break;
                        
                    }
                    else if(bookName===''){
                        alert('Hãy nhập gì đó!!!');
                    }
                    else{
                        break;
                    }
                }
                while(true && inputCheck===true){
                    bookYear=prompt('Nhập năm xuất bản của sách cần thêm');
                    if(bookYear===null){
                        break;
                    }
                    else if(bookYear===''){
                        alert('Hãy nhập gì đó!!!');
                    }
                    else{
                        bookYear=Number(bookYear);
                        if(bookYear < 868||bookYear>2025){//Sách lâu đời nhất từng đc xuất bản là năm 868 :D
                            alert('Hãy nhập năm xuất bản khả dụng!!!');
                        }
                        else{
                            bookList.push(book=addBook(bookID,bookName,bookYear));
                            alert('Đã thêm sách!!!');
                            // console.log(booklist);
                            break;
                        }
                    }
                }
                break;
            case 2:
                let list ='';
                
                bookList.forEach(function(book,index){
                    list+=`${index+1}. ID: ${book.bookID}, Tên: ${book.bookName}, Năm xuất bản: ${book.bookYear}\n`;
                });
                if(list===''){
                    alert('Danh sách trống!!!');
                }
                else{
                    alert(list);
                }
                break;
            case 3:
                while(true){
                    bookName=prompt('Nhập tên sách cần tìm: ');
                    if(bookName===null){
                        break;
                    }
                    else{
                        if(bookName===''){
                            alert('Hãy nhập lại!!!');
                        }
                        else{
                            let findBookIndex=bookList.findIndex(function(book){
                                return book.bookName===bookName;
                            })
                            if(findBookIndex!== -1){
                                let foundBook = bookList[findBookIndex];
                                alert(`Thông tin về sách ${bookName}: \nID:${foundBook.bookID}\nTên: ${foundBook.bookName}\nNăm xuất bản:${foundBook.bookYear}`);
                                break;
                            }
                            else{
                                alert(`Sách với tên ${bookName} không tồn tại!!!`);
                            }
                        }
                        
                    }
                  
                
                }
                break;
                
            case 4:
                while(true){
                    bookID=prompt('Nhập ID sách cần xóa: ');
                    if(bookID===null){
                        break;
                    }
                    else{
                        if(bookID===''){
                            alert('Hãy nhập lại!!!');
                        }
                        else{
                            let deletedBookIndex=bookList.findIndex(function(book){
                                return book.bookID===bookID;
                            })
                            if(deletedBookIndex!== -1){
                                let deleteBookInfo= bookList[deletedBookIndex];
                                bookList.splice(deletedBookIndex,1);
                                alert(`Đã xóa sách!!! \nThông tin sách đã xóa: ${bookName}: \nID:${deleteBookInfo.bookID}\nTên: ${deleteBookInfo.bookName}\nNăm xuất bản:${deleteBookInfo.bookYear}`);
                                break;
                            }
                            else{
                                alert(` Sách với ID: ${bookID} không tồn tại!!!`)
                            }
                            
                        }
                        
                    }
                    
                }
                
        }
    }
}
