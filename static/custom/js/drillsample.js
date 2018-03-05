define([
    "cdf/lib/jquery"
], function ($) {
    
    /* Private scope ----------------------------- */

    function _renewCloseClick(){
        $(".close-subdrill").off("click").click(function (e){
            $("tr.expandingClass[role='row'] td").trigger('click');
        });
    }

    function _configDonutChart(){
        var cd = this.chartDefinition;
        cd.slice_innerRadiusEx = '50%';
    }

    function _configLineChart(){
        var cd = this.chartDefinition;
        cd.plotFrameVisible = false;
        cd.orthoAxisGrid_strokeStyle = '#ccc';
        cd.orthoAxisTicks_strokeStyle = '#ccc';
        cd.orthoAxisRule_strokeStyle = "transparent";
        cd.orthoAxisMinorTicks_strokeStyle = "transparent";
        cd.baseAxisTicks_strokeStyle = '#A9A9A9';
        cd.baseAxisRule_strokeStyle = "transparent";
        cd.baseAxisFont = "11px Arial";
    
    
        cd.baseAxisGrid_lineWidth = 0;
    
        cd.contentMargins = 0;
        cd.margins = 0;
        cd.panelSizeRatio = 1;
        cd.paddings = 0;
        cd.contentPaddings = 0;

        
        cd.seriesInRows = true;
    }

    /* Public scope- ----------------------------- */
    return {
        renewCloseClick : _renewCloseClick,
        configDonutChart : _configDonutChart,
        configLineChart : _configLineChart
    };
});
