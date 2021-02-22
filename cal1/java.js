
$( ()=>{

	CreateAndTakeVar();

} );

var FormulaHolder;
var click=0;
var body,CalHolder,BtnHolder,Btn1,Btn2;
var h1,x,y;
function CreateAndTakeVar() {
	body=$('body');	
	x=window.innerWidth;
	y=window.innerHeight;

	$(body).css({width:x-10,height:y-30,background:'lightblue',});

	body.append('<div id="CalHolder"><h1>Calculator</h1>  </div> ');
	h1=$('h1');
	h1.css({ textAlign:'center'});

	CalHolder=$('#CalHolder');
	CalHolder.css({width:x/2+300,height:y/2+250,top:'2.5%',marginLeft:'auto',marginRight:"auto" , background:'gray',  });

	CreateNormalCalculator();

}

var loop=0;
var NumberHolder=22;

var Numbers=[];
var Operator=[];

var All=[];
var num=[];
function CreateNormalCalculator(){


		$(NumberHolder).remove();
		$(FormulaHolder).remove();
		let fix=x/3.4;
		CalHolder.append('<input type="text" id="NumberHolder"></ >');
		NumberHolder=$('#NumberHolder');
		NumberHolder.css({position:'absolute', width:'250px',height:'75px',background:'red',top:'42%',left:x/2-120,textAlign:'center',fontSize:'20px'  })
		$(NumberHolder).val('Click Here to Calculate');
		$(NumberHolder).css({transition:'5s' });
		$(NumberHolder).on('click',()=>{
		Numbers=[];
	    num=[];
	    Operator=[];
		$(NumberHolder).val('');	
	    NumberHolder.css({position:'absolute',left:x/2-fix , width:x/2+100,height:'120px',background:'#44434a',top:'42%',textAlign:'center',fontSize:'24px',fontFamily:'Tahoma',color:'gold'  })

		})


		NumberHolder.on('change',()=>{
	    	All=[];
	    	num=[];
	    	All=NumberHolder.val().split('');
	    	
	    	let loop1=1;
			
	    	for(let i=0;i<All.length;i++){

	    		if(All[i] === "/"  ){
	    			Numbers.push(num);
	    			num="";
	    			Operator.push(All[i]);
	    		}if(All[i] === "+"  ){
	    			Numbers.push(num);
	    			num="";
	    			Operator.push(All[i]);	

	    		}if(All[i] === "*"  ){
	    			Numbers.push(num);
	    			num="";
	    			Operator.push(All[i]);

	    		}if(All[i] === "-"  ){
	    			Numbers.push(num);
	    			num="";
	    			Operator.push(All[i]);	
	    		}else{
	    			
	    			num+=All[i];

	    			if(loop1==All.length){
	    				Numbers.push(num);
	    			
	    			}else if(num==="-" || num==="+" || num==="*" || num==="/"  ){
	    				num="";

	    			}		
	    			
	    			
	    		}

	    		loop1++;
	    		
	    	}	
		    	
var Result;

function CalculateResult(){

		if(Numbers.length==1 ){
			Result=parseInt(Numbers[0]);
						
		}if(Numbers.length==2){
			Result=eval( ' '+Numbers[0]+' '+Operator[0]+'   '+Numbers[1]+'  ');	
					
		}if(Numbers.length==3){
			Result=eval( '   '+Numbers[0]+' '+Operator[0]+'   '+Numbers[1]+'  '+Operator[1]+'  '+Numbers[2]+'      ');	
					
		}if(Numbers.length==4){
			Result=eval( '   '+Numbers[0]+' '+Operator[0]+'   '+Numbers[1]+'  '+Operator[1]+'  '+Numbers[2]+'  '+Operator[2]+'  '+Numbers[3]+'    ');	
					
		}if(Numbers.length==5){
			Result=eval( '   '+Numbers[0]+' '+Operator[0]+'   '+Numbers[1]+'  '+Operator[1]+'  '+Numbers[2]+'  '+Operator[2]+'  '+Numbers[3]+' '+Operator[3]+' '+Numbers[4]+'  ');	
					
		}if(Numbers.length==6){
			Result=eval( '   '+Numbers[0]+' '+Operator[0]+'   '+Numbers[1]+'  '+Operator[1]+'  '+Numbers[2]+'  '+Operator[2]+'  '+Numbers[3]+' '+Operator[3]+' '+Numbers[4]+' '+Operator[4]+' '+Numbers[5]+'  ');	
					
		}if(Numbers.length==7){
			Result=eval( '   '+Numbers[0]+' '+Operator[0]+'   '+Numbers[1]+'  '+Operator[1]+'  '+Numbers[2]+'  '+Operator[2]+'  '+Numbers[3]+' '+Operator[3]+' '+Numbers[4]+' '+Operator[4]+' '+Numbers[5]+' '+Operator[5]+' '+Numbers[6]+'  ');	
					
		}if(Numbers.length==8){
			Result=eval( '   '+Numbers[0]+' '+Operator[0]+'   '+Numbers[1]+'  '+Operator[1]+'  '+Numbers[2]+'  '+Operator[2]+'  '+Numbers[3]+' '+Operator[3]+' '+Numbers[4]+' '+Operator[4]+' '+Numbers[5]+' '+Operator[5]+' '+Numbers[6]+' '+Operator[6]+' '+Numbers[7]+'  ');	
					
		}	

		
		NumberHolder.css({ color:'orange',fontSize:'66px' });	
	    NumberHolder.val(Result);		

	    	}

	    	CalculateResult()

	    })


		
	


}




