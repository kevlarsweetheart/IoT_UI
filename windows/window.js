$('form').submit(function() {
    if($('#m').val() === '0') {
        $("#left-wnd").removeClass("closed");
        $("#left-wnd").addClass("open");
        $("#left-wnd").text("open");
    }
    else if($('#m').val() === '1') {
        $("#left-wnd").removeClass("open");
        $("#left-wnd").addClass("closed");
        $("#left-wnd").text("closed");
    }
    if($('#m').val() === '2') {
        $("#right-wnd").removeClass("closed");
        $("#right-wnd").addClass("open");
        $("#right-wnd").text("open");
    }
    else if($('#m').val() === '3') {
        $("#right-wnd").removeClass("open");
        $("#right-wnd").addClass("closed");
        $("#right-wnd").text("closed");
    }
    if($('#m').val() === 'b0') {
        $("#left-charge").removeClass("normal");
        $("#left-charge").addClass("low");
        $("#left-charge").text("low");
    }
    else if($('#m').val() === 'b1') {
        $("#left-charge").removeClass("low");
        $("#left-charge").addClass("normal");
        $("#left-charge").text("normal");
    }
    if($('#m').val() === 'b2') {
        $("#right-charge").removeClass("normal");
        $("#right-charge").addClass("low");
        $("#right-charge").text("low");
    }
    else if($('#m').val() === 'b3') {
        $("#right-charge").removeClass("low");
        $("#right-charge").addClass("normal");
        $("#right-charge").text("normal");
    }
    $('#m').val('');
    return false;
});
