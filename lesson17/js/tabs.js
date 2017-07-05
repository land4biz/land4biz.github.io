    	$(document).ready(function(){
    		function FindNumberTab(x){
				return $(x).index();
    		};
			function FindTabItem(a, Tab_items){
            	return Tab_items[a];
			};
			function RemoveClassOpen(Tab_items){
				Tab_items.removeClass('open');
			};
			function ToggleClassOpen(Item){
				$(Item).addClass('open');
			};
			function RemoveClassActive(Tabs){
				Tabs.removeClass('active');
			};
			function AddClassActive(ClickTab){
				$(ClickTab).addClass('active');
			};


    		$('.wrapper .tab').click(function(){
    			var ClickTab = this;
    			var wrap = $(ClickTab).parent().parent();
    			var Tabs = wrap.children().children('.tab');
    			var Tab_items = wrap.children('.tab_item');

    			var TabNumber = FindNumberTab(ClickTab);
    			var Item = FindTabItem(TabNumber, Tab_items);
    			RemoveClassOpen(Tab_items);
    			ToggleClassOpen(Item);
    			RemoveClassActive(Tabs)
    			AddClassActive(ClickTab);
    		});
    	});
