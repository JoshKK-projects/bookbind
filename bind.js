var fs = require('fs');
process.stdin.setEncoding('utf8');
var book = '';
function getBook(){
	//just hardcode it for now
}

createHtml('starshiptroopers');
function createHtml(book_dir){
	book = book_dir;
	fs.readdir('./'+book_dir,function(err,files){
		var total_pages = files.length;
		var current_page = 1;
		var ordered_page_elements = [];
		for(current_page;current_page<=total_pages;current_page++){
			var element = makeImg(current_page);
			ordered_page_elements.push(element);			
		}
		var head = createHead();
		console.log(head);
		var body = createBody(ordered_page_elements);
		var contents = head + body;
		fs.writeFile(book_dir+'.html',contents,function(err){
			console.log('done');
		});
	});
}


function createHead(){
	var header_string = "<!DOCTYPE html>";
	header_string += "<head>";
	header_string += "<meta charset='utf-8' />";
	header_string += "<title>"+book+"</title>";
	header_string += '<link rel="stylesheet" href="css.css" />';//if we add
	header_string += '<script src="js.js" type="text/javascript"></script>';
	header_string += "</head>";
	return header_string;
}

function createBody(img_elements){
	var body = "<body>";
	body += "<div id='width-determine'>";
	for(var img in img_elements){
		body += img_elements[img];
	}
	body += "</div>";
	body += "</body>";
	return body;

}


function makeImg(page_num){
	var padded_page_num = leftpad(page_num);
	var page = "page"+padded_page_num;
	var page_element = "<img id='"+page_num+"'class='page-image' style='width:100%' src='" + book +"\/" +page + "' />";
	return page_element;
}

function leftpad(num){//up to 9999
    var num_str = num.toString();
    var pad = 4 - num_str.length;
    i=0;
    while(i++<pad){
        num_str = "0" + num_str;
    }
    return num_str;
}