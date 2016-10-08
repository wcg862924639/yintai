window.onload=function(){
 
// 顶部下拉列表框
var lists=$(".index-right1");
      var nav2s=$(".index-right1-0");
      for (var i = 0; i < nav2s.length; i++) {
        var lists2=$("div",nav2s[i]);
        var height=lists2.length*50;
        nav2s[i].height=height;
      };
      for (var i = 0; i < lists.length; i++) {
        lists[i].index=i;
        hover(lists[i],function(){
          nav2s[this.index].style.display="block";
          nav2s[this.index].style.zIndex=2;
          animate(nav2s[this.index],{height:nav2s[this.index].height})
        },function(){
        nav2s[this.index].style.display="none";
        nav2s[this.index].style.height="0";
        nav2s[this.index].style.zIndex=1;
      })
      };
// 右边的楼层
       var foor=$(".foors")[0];
        // var btnx=$(".btnx");
        var floor=$(".floor");
        var tops=[];
        for (var i = 0; i < floor.length; i++) {
    tops.push(floor[i].offsetTop);
 };
       document.documentElement.scrollTop=1;
        if(document.documentElement.scrollTop==1){
            var scrollobj=document.documentElement;
        }else{
            var scrollobj=document.body;
        }
        var flag=true;
        addEvent(window,"scroll",aa)
      function aa(){
            var st=scrollobj.scrollTop;
            if(st>880){
                if(flag){
                flag=false;
                animate(foor,{height:450,width:40})
                 }
            }else{
                flag=true;
                 animate(foor,{width:0,height:0})
            }
           }

            var mask=$(".mask")
            addEvent(window,"scroll",bb)
            function bb(){
              var scrollT=scrollobj.scrollTop;
                for (var i = 0; i < mask.length; i++){
                    if(scrollT>tops[i]){
                        for (var j = 0; j < tops.length; j++) {
                            mask[j].style.display="";
                        };
                    mask[i].style.display="block";
                 }
             };
            }

           var btnx=$(".btnx");
           var floor=$(".floor");
            var mask=$(".mask");
           for (var i = 0; i < btnx.length; i++) {
               btnx[i].index=i;
               btnx[i].onclick=function(){
                for (var i = 0; i < btnx.length; i++) {
                var ot=floor[this.index].offsetTop;
                animate(scrollobj,{scrollTop:ot})
                mask[i].style.display="";
               }

            };
           };

//图片的按需加载
var jz=$(".jz");
  var hop=[];
  for (var i = 0; i < jz.length; i++) {
    hop.push(jz[i].offsetTop);
 };
 document.documentElement.scrollTop=1;
        if(document.documentElement.scrollTop==1){
            var scrollobj=document.documentElement;
        }else{
            var scrollobj=document.body;
        }
  addEvent(window,"scroll",cc)
  function cc(){
    for (var i = 0; i < jz.length; i++) {
      var scrollTop=scrollobj.scrollTop;
      if(scrollTop+400>hop[i]&&jz[i].getAttribute("flag")!="true"){
        var imgs=$("img",jz[i])
        for (var j = 0; j < imgs.length; j++) {
          imgs[j].src=imgs[j].getAttribute("asrc")
        };
        jz[i].setAttribute("flag",true); 
      }
    };
  }

// banner图的效果
	var fangs=getClass("fang");
	var imgs=getClass("img");
	var banners=getClass("banner")[0];//获取banner中下标为0的对象
	var colors=["#F0F0EE","#A3D4F4","#008ACB","#A52F3F"];
	for (var i = 0; i < fangs.length; i++) {
		// 当开启轮播时 让轮播从当前图片开始播放
		num=this.index;
		//给每个按钮对象添加一个index属性，值为它在集合中的下标
		fangs[i].index=i;
		fangs[i].onmouseover=function(){
			for (var i = 0; i < fangs.length; i++) {
			
			imgs[i].style.zIndex=1;
			fangs[i].style.background="#000";
		};
		//this 当前触发事件的对象
		  imgs[this.index].style.zIndex=2;
		  this.style.background="red"
		  banners.style.background=colors[this.index];
		}
	};

	  lunbo=setInterval(move,2000)
	  var num=0;
	  //给鼠标添加一个离开图片时的属性
	  function move(){
	  	num++;
	  	if(num==fangs.length){
      num=0;
     }
     for (var i = 0; i < fangs.length; i++) {
			imgs[i].style.zIndex=1;
			fangs[i].style.background="#000";
     };
          imgs[num].style.zIndex=2;
		  fangs[num].style.background="red"
		  banners.style.background=colors[num];
	  }


// banner图的左右点击效果
      var qh1=getClass("qh1")[0];
      var qh2=getClass("qh2")[0];
      var banner_box=getClass("banner-box")[0];

      //鼠标移入移出banner_box盒子时左右按钮qh的效果
     banner_box.onmouseover=function(){
     	clearInterval(lunbo)
      	qh1.style.zIndex=2;
      		qh2.style.zIndex=2;
      }
     banner_box.onmouseout=function(){
     	lunbo=setInterval(move,2000)

      	qh1.style.zIndex=1;
      		qh2.style.zIndex=1;
      }
      //鼠标放到按钮zf上改变其背景颜色
       qh1.onmouseover=function(){
       	this.style.background="red"
       }
       qh2.onmouseover=function(){
       	this.style.background="red"
       }
       qh1.onmouseout=function(){
       	this.style.background="#000"
       }
       qh2.onmouseout=function(){
       	this.style.background="#000"
       }

      // 鼠标点击在按钮qh箭头上切换其后背景图
       var n=fangs.length; 
      qh1.onclick=function(){    
      n--;
      if(n==-1){
        n=fangs.length;
      }
      for (var j=0; j <imgs.length; j++) {
       imgs[j].style.zIndex=1;
       fangs[j].style.background="#000";
      };
       imgs[n].style.zIndex=2;
         fangs[n].style.background="red";
      }
      
      qh2.onclick=function(){
        move();
      }
     



//头部购物

   // 选项卡效果
   
      var btns=getClass("btn");
    	var items=getClass("item");
      function xxk(btns,items){
    	for (var i = 0; i < btns.length; i++) {
    		btns[i].index=i;
    		btns[i].onmouseover=function(){
    			for (var i = 0; i < items.length; i++) {
    				items[i].style.display="none";			
    			};
    			items[this.index].style.display="block";
    		}
    	};  
     }  
     xxk(btns,items)
     var btns1=getClass("btn1");
      var items1=getClass("item1");
     xxk(btns1,items1)



//时尚名品  
       
       var leftbo=getClass("leftbo");
       var rightbo=getClass("rightbo");
       var botu1=getClass("botu1");
       for (var i = 0; i < botu1.length; i++) {
            huabo(botu1[i],leftbo[i],rightbo[i])
       };
       function huabo(botu1,leftbo,rightbo){
      leftbo.onclick=function(){	
        var last=getLast(botu1);
        var first=getFirst(botu1);
        botu1.insertBefore(last,first)
        botu1.style.marginLeft=-189+"px";
      	animate(botu1,{marginLeft:0},1000)
      }
      rightbo.onclick=function(){
      	animate(botu1,{marginLeft:-189},1000,
          function(){
            var first=getFirst(botu1);
            this.appendChild(first)
            this.style.marginLeft=0;
        })
      }
   }


      var brad_middle=getClass("brad-middle");
      var zf1=getClass("zf1");
      var zf2=getClass("zf2");
       var inners=getClass("inner");
       var bradyuan=getClass("bradyuan");
        for (var i = 0; i < brad_middle.length; i++) {
        	dianbo(brad_middle[i],zf1[i],zf2[i],inners[i],bradyuan[i])
        };
       function dianbo(brad_middle,zf1,zf2,inners,bradyuan){
       	// var yuans=bradyuan.getElementsByClassName("yuan");
        // 另种获取yuan的方法
        var yuans=bradyuan.getElementsByTagName("div")
      
      //鼠标移入移出brad-middle盒子时左右按钮zf的效果
      var flag=true;
      brad_middle.onmouseover=function(){
      	animate(zf1,{left:0},300)
      	animate(zf2,{right:0},300)
      }
       brad_middle.onmouseout=function(){
      	animate(zf1,{left:-40},300)
      	animate(zf2,{right:-40},300)
      }
      //鼠标放到按钮zf上改变其背景颜色
       zf1.onmouseover=function(){
       	this.style.background="red"
       }
      
       zf2.onmouseover=function(){
         if(flag){
       	this.style.background="red"
       }
       }
     
       zf1.onmouseout=function(){
       	this.style.background="#ccc"
       }
       zf2.onmouseout=function(){
       	this.style.background="#ccc"
       }

      // // 鼠标点击在按钮zf或者yuan上移动其后背景图
          
       zf1.onclick=moveleft;
       zf2.onclick=moveright;
       yuans[0].onclick=moveleft;
      yuans[1].onclick=moveright;

      function moveleft(){
      	flag=true;
      	animate(inners,{left:0})
      	yuans[0].style.background="red"
      yuans[1].style.background="#555"
      }
      function moveright(){
      	flag=false;
      	animate(inners,{left:-390})
      	yuans[1].style.background="red"
       yuans[0].style.background="#555"
      }
   }
   



// 所有边框效果
   function border(obj,time){
		 	obj.style.position="relative";
		 	//创建4个div对象
		 	var div1=document.createElement("div");
		 	var div2=document.createElement("div");
		 	var div3=document.createElement("div");
		 	var div4=document.createElement("div");
		 	//给创建的4个div对象添加属性
		 	div1.style.cssText="position:absolute;background:red;left:0;top:0;height:2px;";
		 	div2.style.cssText="position:absolute;background:red;left:0;top:0;width:2px;";
		 	div3.style.cssText="position:absolute;background:red;right:0;bottom:0;height:2px;";
		 	div4.style.cssText="position:absolute;background:red;right:0;bottom:0;width:2px;";
		 	//向页面中添加4个div子元素
		 	obj.appendChild(div1)
		 		obj.appendChild(div2)
		 			obj.appendChild(div3)
		 				obj.appendChild(div4)
		 				//获取obj里面的宽高，并转化为数值型
		 				var width=parseInt(getStyle(obj,"width"));
		 				var height=parseInt(getStyle(obj,"height"));
		 				//给obj添加一个鼠标经过的动画
		 				obj.onmouseover=function(){
		 					animate(div1,{width:width},time)
		 					animate(div2,{height:height},time)
		 					animate(div3,{width:width},time)
		 					animate(div4,{height:height},time)
		 				}
		 				//鼠标离开时的效果
		 				obj.onmouseout=function(){
		 					animate(div1,{width:0},time)
		 					animate(div2,{height:0},time)
		 					animate(div3,{width:0},time)
		 					animate(div4,{height:0},time)
		 				}
		 }
		var one=getClass("one");
    for (var i = 0; i < one.length; i++) {
     border(one[i],500)
    };
    var two=getClass("two");
    for (var i = 0; i < two.length; i++) {
     border(two[i],500)
    };
		var three=getClass("three");
    for (var i = 0; i < three.length; i++) {
     border(three[i],500)
    };

  }
      