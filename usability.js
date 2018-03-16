$(document).ready(function () {
    var height = window.height;
    var w = window.innerWidth;
    $("#divRightBar").css("height", w);
    var cHeight = $("#idHeader").height() - 2000;
    $("#divScrollBar").mCustomScrollbar({
        axis: "y",
        live: true,
        setHeight: cHeight,
        scrollInertia: 500,
        theme: "minimal-dark",
        callbacks: {
            onTotalScroll: function () {
            }
        }

    });

    $("#searchIcon").click(function () {
        $('#divSearch').addClass('active');
        $('#divSearch').removeClass('display-none');
        $(".clsSearchTxt").css('right', 0);        
        $("#idSearchIcon").addClass('display-none');
        $("#txtSearch").focus();
    });

    $(document).on('click', '.SearchCancle', function () {
        $("#txtSearch").val("");
        $("#divSearch").removeClass('active');
        $("#idSearchIcon").removeClass('display-none');
        $("#idSearchIcon").addClass('display-block');
    });

    $("#menu-toggle").click(function (e) {
        e.preventDefault();
        if ($("#menu-toggle").hasClass('clsHideRightMenu')) {
            $("#menu-toggle").removeClass('clsHideRightMenu');
            $("#menu-toggle").addClass('clsShowRightMenu');
            $("#divRightBar").removeClass('display-block');
            $("#divRightBar").addClass('display-none');
            $("#idHeader").removeClass('col-lg-9');
            $("#idHeader").addClass('col-lg-12');
        }
        else if ($("#menu-toggle").hasClass('clsShowRightMenu')) {
            $("#menu-toggle").removeClass('clsShowRightMenu');
            $("#menu-toggle").addClass('clsHideRightMenu');
            $("#divRightBar").removeClass('display-none');
            $("#divRightBar").addClass('display-block');
            $("#idHeader").removeClass('col-lg-12');
            $("#idHeader").addClass('col-lg-9');
        }
    });

  
});

$(window).load(function () {
    $(document).on('click', '#ulDMMTCh1', function () {
        $("#divScrollBar").mCustomScrollbar("scrollTo", "#idDMMTCh1");
    });
    $(document).on('click', '#ulDMMTCh2', function () {
        $("#divScrollBar").mCustomScrollbar("scrollTo", "#idDMMTCh2");
    });
    $(document).on('click', '#ulDMMTCh3', function () {
        $("#divScrollBar").mCustomScrollbar("scrollTo", "#idDMMTCh3");
    });
    $(document).on('click', '#ulDMMTCh4', function () {
        $("#divScrollBar").mCustomScrollbar("scrollTo", "#idDMMTCh4");
    });
    $(document).on('click', '#ulDMMTCh5', function () {
        $("#divScrollBar").mCustomScrollbar("scrollTo", "#idDMMTCh5");
    });
    $(document).on('click', '#ulDMMTCh6', function () {
        $("#divScrollBar").mCustomScrollbar("scrollTo", "#idDMMTCh6");
    });
    $(document).on('click', '#ulDMMTCh7', function () {
        $("#divScrollBar").mCustomScrollbar("scrollTo", "#idDMMTCh7");
    });
    $(document).on('click', '#ulDMMTCh8', function () {
        $("#divScrollBar").mCustomScrollbar("scrollTo", "#idDMMTCh8");
    });
    $(document).on('click', '#ulDMMTCh9', function () {
        $("#divScrollBar").mCustomScrollbar("scrollTo", "#idDMMTCh9");
    });
    $(document).on('click', '#ulDMMTCh10', function () {
        $("#divScrollBar").mCustomScrollbar("scrollTo", "#idDMMTCh10");
    });
    $(document).on('click', '#ulDMMTCh11', function () {
        $("#divScrollBar").mCustomScrollbar("scrollTo", "#idDMMTCh11");
    });
    $(document).on('click', '#ulDMMTCh12', function () {
        $("#divScrollBar").mCustomScrollbar("scrollTo", "#idDMMTCh12");
    });
    $(document).on('click', '#ulDMMTCh13', function () {
        $("#divScrollBar").mCustomScrollbar("scrollTo", "#idDMMTCh13");
    });

    $("#idDontMakeThink").click(function (e) {
        e.preventDefault();
        $("#idDontMakeMeThink").removeClass("display-none");
        $("#idDontMakeMeThink").addClass("display-block");
        $("#idRocket").addClass("display-none");
        $("#idRocket").removeClass("display-block");

        $("#idRocketRight").removeClass("display-block");
        $("#idRocketRight").addClass("display-none");
        $("#idDMMTRight").addClass("display-block");
        $("#idDMMTRight").removeClass("display-none");
    });

    $("#idRocketSurgery").click(function (e) {
        e.preventDefault();
        $("#idDontMakeMeThink").addClass("display-none");
        $("#idDontMakeMeThink").removeClass("display-block");
        $("#idRocket").addClass("display-block");
        $("#idRocket").removeClass("display-none");

        $("#idRocketRight").removeClass("display-none");
        $("#idRocketRight").addClass("display-block");
        $("#idDMMTRight").addClass("display-none");
        $("#idDMMTRight").removeClass("display-block");
    });

    $("#idLIReferences").click(function (e) {
        e.preventDefault();
        $("#idDontMakeMeThink").addClass("display-none");
        $("#idDontMakeMeThink").removeClass("display-block");
        $("#idRocket").addClass("display-none");
        $("#idRocket").removeClass("display-block");

        $("#idReference").removeClass("display-none");
        $("#idReference").addClass("display-block");
    });


    $(document).on('click', '#ulRocketCh1', function () {
        $("#divScrollBar").mCustomScrollbar("scrollTo", "#idRocketCh1");
    });
    $(document).on('click', '#ulRocketCh2', function () {
        $("#divScrollBar").mCustomScrollbar("scrollTo", "#idRocketCh2");
    });
    $(document).on('click', '#ulRocketCh3', function () {
        $("#divScrollBar").mCustomScrollbar("scrollTo", "#idRocketCh3");
    });
    $(document).on('click', '#ulRocketCh4', function () {
        $("#divScrollBar").mCustomScrollbar("scrollTo", "#idRocketCh4");
    });
    $(document).on('click', '#ulRocketCh5', function () {
        $("#divScrollBar").mCustomScrollbar("scrollTo", "#idRocketCh5");
    });
    $(document).on('click', '#ulRocketCh6', function () {
        $("#divScrollBar").mCustomScrollbar("scrollTo", "#idRocketCh6");
    });
    $(document).on('click', '#ulRocketCh7', function () {
        $("#divScrollBar").mCustomScrollbar("scrollTo", "#idRocketCh7");
    });
    $(document).on('click', '#ulRocketCh8', function () {
        $("#divScrollBar").mCustomScrollbar("scrollTo", "#idRocketCh8");
    });
    $(document).on('click', '#ulRocketCh9', function () {
        $("#divScrollBar").mCustomScrollbar("scrollTo", "#idRocketCh9");
    });
    $(document).on('click', '#ulRocketCh10', function () {
        $("#divScrollBar").mCustomScrollbar("scrollTo", "#idRocketCh10");
    });
    $(document).on('click', '#ulRocketCh11', function () {
        $("#divScrollBar").mCustomScrollbar("scrollTo", "#idRocketCh11");
    });
    $(document).on('click', '#ulRocketCh12', function () {
        $("#divScrollBar").mCustomScrollbar("scrollTo", "#idRocketCh12");
    });
    $(document).on('click', '#ulRocketCh13', function () {
        $("#divScrollBar").mCustomScrollbar("scrollTo", "#idRocketCh13");
    });


});
