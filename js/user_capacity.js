	$(function() {
			var data = [
						{name : '基本知识',value : 90,color : '#4572a7'},
						{name : '会计岗位',value : 50,color : '#aa4643'},
						{name : '出纳岗位',value : 40,color : '#89a54e'},
						{name : '纳税申报',value : 20,color : '#80699b'},
						{name : '防伪开票',value : 100,color : '#3d96ae'}
					];
	
			var chart = new iChart.Column2D({
				render : 'canvasDiv',
				data : data,
				title : {
					text : '',
					color : '#3e576f'
				},
				subtitle : {
					text : '',
					color : '#6d869f'
				},
//				footnote : {
//					text : 'ichartjs.com',
//					color : '#909090',
//					fontsize : 11,
//					padding : '0 38'
//				},
				width : 800,
				height : 300,
//				下面文字宽度
				label : {
					fontsize:16,
					color : '#666666'
				},
				shadow : true,
				shadow_blur : 2,
				shadow_color : '#aaaaaa',
				shadow_offsetx : 1,
				shadow_offsety : 0,
				column_width : 62,
				sub_option : {
					listeners : {
						parseText : function(r, t) {
							return t + "%";
						}
					},
//					柱形图上面文字
					label : {
						fontsize:11,
						fontweight:600,
						color : '#222'
					},
					border : {
						width : 2,
						//radius : '5 5 0 0',//上圆角设置
						color : '#ffffff'
					}
				},
				coordinate : {
//					背景线条
					background_color : null,
					grid_color : '#e4e4e4',
					width : 600,
					axis : {
						color : '#c0d0e0',
						width : [0, 0, 1, 0]
					},
//					侧边
					scale : [{
						position : 'left',
						start_scale : 0,
						end_scale : 60,
						scale_space : 10,
						scale_enable : false,
						listeners:{//配置事件
							parseText:function(t,x,y){//设置解析值轴文本
								return {text:t+"%"}
							}
//						label : {
//							fontsize:11,
//							color : '#666666'
//						}

						}
					}]
				}
			});
			
			/**
			 *利用自定义组件构造左侧说明文本。
			 */
			chart.plugin(new iChart.Custom({
					drawFn:function(){
						/**
						 *计算位置
						 */	
						var coo = chart.getCoordinate(),
							x = coo.get('originx'),
							y = coo.get('originy'),
							H = coo.height;
						/**
						 *在左侧的位置，设置逆时针90度的旋转，渲染文字。
						 */
						chart.target.textAlign('center')
						.textBaseline('middle')
						.textFont('500 13px Verdana')
						.fillText('',x-40,y+H/2,false,'#6d869f', false,false,false,-90);
						
					}
			}));
			
			chart.draw();
			var arr = [];
			var f_data = document.querySelectorAll('.latitude>ul>li>span>i');
			for(var i=0;i<data.length;i++){
				console.log(data[i].value)
				arr.push(data[i].value)	
			  }
             for (var j=0;j<f_data.length;j++) {
			    console.log(f_data[j].innerHTML)
			    f_data[j].innerHTML =arr[j]
			    }
		
		});
		