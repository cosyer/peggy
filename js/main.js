let editor = document.querySelector("#editor pre");
let editorWrap = document.querySelector("#editor");
let styleTag = document.createElement("style");
document.head.appendChild(styleTag);

let CssCode = `/* 
* 小猪佩奇身上纹，掌声送给社会人
* 今天就用CSS画一个小猪佩奇
* 别眨眼，现在开始画。
*/
	/*先画个猪头*/
	.pigqi{
		position: absolute;
		margin-top:100px;
		margin-left: 40%;
		padding: 0;
	}
	.face{ 
		position: absolute;
		 z-index: 180;
		box-sizing: border-box;
		width: 300px;
		height: 300px;
		border: 4px solid rgb(255,144,186);
		border-radius: 90% 90% 80% 80%/ 90% 90% 90% 70%;
		background:rgb(255,175,213);
	}

	/*画个猪鼻子*/
	.nose{
		position: absolute;
		box-sizing: border-box;
		margin-top: 10px;
		margin-left: 270px;
		width: 350px;
		height: 150px;
		border: 4px solid rgb(255,144,186);
		border-radius: 70% 70% 80% 80%;
		background:rgb(255,175,213);
		-webkit-transform:rotate(190deg);
		transform-origin: left;
	}
	.head_ff{
		position: absolute;
		z-index: 190;
		margin-top: -15px;
		margin-left: -3px;
		width: 210px;
		height: 152px;
		border-radius: 80% 40% 100% 40%/80% 50% 80% 90%;
		background: rgb(255,175,213);
		-webkit-transform:rotate(15deg);
	}
	/*画个猪鼻孔*/
	.nose_ff{
		position: absolute;
		z-index: 201;
		margin-top: -22px;
		margin-left: -70px;
		width: 80px;
		height: 98px;
		border: 4px solid rgb(255,144,186);
		border-radius: 100% 100% 100% 90%;
		background: red;
		background:rgb(255,175,213);
		-webkit-transform:rotate(50deg);
	}
	.lef_nostril{
		position: absolute;
		margin-top: 50px;
		margin-left: 8px;
		width: 15px;
		height: 15px;
		border-radius: 50%;
		background:rgb(255,144,186);
	}
	.right_nostril{
		position: absolute;
		margin-top: 30px;
		margin-left: 30px;
		width: 15px;
		height: 15px;
		border-radius: 50%;
		background:rgb(255,144,186);
	}
	/*画个猪耳朵*/
	.left_ear{
		margin-bottom: -100px;
		margin-left: 220px;
		width: 30px;
		height: 60px;
		border: 4px solid rgb(255,144,186);
		border-radius: 60% 60% 50% 50% / 60% 60% 50% 50%;
		background:rgb(255,175,213);
		-webkit-transform:rotate(40deg);
	}
	.right_ear{
		margin-bottom: -20px;
		margin-left: 180px;
		width: 30px;
		height: 60px;
		border: 4px solid rgb(255,144,186);
		border-radius: 60% 60% 50% 50% / 60% 60% 50% 50%;
		background:rgb(255,175,213) ;
		-webkit-transform:rotate(20deg);
	}
	/*画个猪眼睛*/
	.left_eyes{
		position: absolute;
		z-index: 200;
		margin-top: 2px;
		margin-left:110px;
		width: 30px;
		height: 30px;
		border: 4px solid rgb(255,144,186);
		border-radius: 50%;
		background: white;
	}
	.right_eyes{
		position: absolute;
		z-index: 200;
		margin-top: 20px;
		margin-left:160px;
		width: 30px;
		height: 30px;
		border: 4px solid rgb(255,144,186);
		border-radius: 50%;
		background: white;
	}
	.eye{
		position: absolute;
		width: 15px;
		height: 15px;
		border-radius: 50%;
		background: black;
	}
	/*画个嘴巴*/
	.mouth{
		position: absolute;
		z-index: 190;
		margin-top: 170px;
		margin-left: 30px;
		width: 110px;
		height: 50px;
		border: 4px solid red;
		border-radius: 0px 0px 100px 100px; 
		background:black;
		-webkit-transform:rotate(25deg);
	}
	.mousth_cover{
		position: absolute;
		z-index: 203;
		margin-top: 155px;
		margin-left: 40px;
		width: 110px;
		height: 50px;
		border: 4px solid red;
		border-radius: 0px 0px 100px 100px;
		background:rgb(255,175,213);
		-webkit-transform:rotate(20deg);
	}
	.mousth_up{
		position: absolute;
		z-index: 204;
		margin-top:130px;
		margin-left: 50px;
		width: 130px;
		height: 50px;
		border-radius: 100px 100px 0px 0px;
		background:rgb(255,175,213);
		-webkit-transform:rotate(25deg);
	}
	/*再给它加个脸颊*/
	.cheek{
		position: absolute;
		z-index: 200;
		margin-top: 90px;
		margin-left: 200px;
		width: 70px;
		height: 90px;
		border-radius: 60%;
		background:rgb(255,143,198) ;
		-webkit-transform:rotate(200deg);
	}
	/*然后就是身体了*/
	.body{
		position: relative;
		z-index: 170;
		margin-top: 250px;
		width: 300px;
		height: 250px;
		border: 6px solid red;
		border-radius: 150% 150% 0% 0% / 500% 400% 0% 0% ;
		background:rgb(255,76,65);
	}
	/*开始画手臂了*/
	.finger{
		position: absolute;
		z-index: 100;
		width: 17px;
		height: 130px;
		border-radius: 80% 50% 50% 80%;
		background: rgb(255,175,213);
		-webkit-transform:rotate(60deg);
	}
	.left_arm{
		 position: relative; 
		/*z-index: 110;*/
		margin-top: -220px;
		margin-left: -10px;
		width: 100px;
		height: 100px;
	}
	.right_arm{
		 position: relative; 
		z-index: 0;
		margin-top: -140px;
		margin-left: 240px;
		width: 100px;
		height: 100px;
		-webkit-transform:rotate(230deg);

	}
	.cut_one{
		margin-top: 80px;
		margin-left: -5px;
		width: 12px;
		height: 45px;
		border-radius: 80% 50% 50% 80%;
		background: rgb(255,175,213);
		-webkit-transform:rotate(30deg);
	}
	.cut_two{
		margin-top: -45px;
		margin-left: 15px;
		width: 12px;
		height: 45px;
		border-radius: 80% 50% 50% 80%;
		background: rgb(255,175,213);
		-webkit-transform:rotate(150deg);
	}
	/*再画两只猪脚*/
	.body_part{
		position: relative;
		margin-top:150px;
	}
	.left_foot{
		position: absolute;
		z-index: 1;
		/*margin-top:500px;*/
		margin-left: 200px;
		width: 20px;
		height: 100px;
		background:rgb(255,175,213);
	}
	.right_foot{
		position: absolute;
		z-index: 1;
		/*margin-top:500px;*/
		margin-left: 100px;
		width: 20px;
		height: 100px;
		background:rgb(255,175,213);
	}
	/*还有个猪尾巴*/
	.tail{
		position: absolute;
		z-index: 0;
		width: 100px;
		height: 50px;
		margin-left: 300px;
		margin-top: 60px;
	}
	.short{
		width: 30px;
		height: 10px;
		background: rgb(255,175,213);
		/*border: 6px solid rgb(255,175,213);*/
		border-radius: 15px;
		margin-top: 30px;
		-webkit-transform:rotate(-5deg);
	}
	.round{
		width: 15px;
		height: 20px;
		border-radius: 50%;
		border: 6px solid rgb(255,175,213);
		margin-top: -35px;
		margin-left: 15px;
	}
	.tall{
		width: 45px;
		height: 8px;
		background: rgb(255,175,213);
		/*border: 1px solid #000;*/
		border-radius: 40% ;
		margin-left: 25px;
		margin-top: -20px;
		-webkit-transform:rotate(320deg);
	}
	/*再给它穿个鞋子*/
	.left_shoes{
		position: absolute;
		z-index: 200;
		margin-top: 100px;
		margin-left: 60px;
		width: 60px;
		height: 20px;
		border-radius: 80% 100% 80% 40%/80% 100% 80% 90%;
		background: black;
	}
	.right_shoes{
		position: absolute;
		z-index: 200;
		margin-top: 100px;
		margin-left: 170px;
		width: 60px;
		height: 20px;
		border-radius: 80% 100% 80% 40%/80% 100% 80% 90%;
		background: black;
	}
	/*最后来个背影*/
	.shadow{
		z-index: 0;
		position: absolute;
		margin-top: 80px;
		width: 300px;
		height: 80px;
		border-radius: 50%;
		background:#ccc; 
	}
	/*完美了，OK*/ `;

function writeCss(code, fn) {
  let n = 0;
  let timer = setInterval(function() {
    n += 3;
    editor.innerHTML = Prism.highlight(
      code.substring(0, n),
      Prism.languages.css
    );
    styleTag.innerHTML = code.substring(0, n);
    editorWrap.scrollTop = 50000;
    if (n >= code.length) {
      clearInterval(timer);
    }
  }, 50);
}

writeCss(CssCode);
