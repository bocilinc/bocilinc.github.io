$(document).on('click','.send_form', function(){
    var input_blanter = document.getElementById('waName');
    
    /* Whatsapp Settings */
    var walink = 'https://web.whatsapp.com/send',
        phone = '628561157147',
        walink2 = 'Halo Bocil_inc'+'%0A'+'*Party Planner*',
        text_yes = 'Terkirim.',
        text_no = 'Isi semua Formulir lalu klik Send.';
    
    /* Smartphone Support */
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    var walink = 'whatsapp://send';
    }
    
    if("" != input_blanter.value){
        var inputCustomerName = $("#waName").val(),
        inputCheckIn = $("#checkInDate").val(),
        inputCheckOut = $("#checkInDate").val(),
        inputStartTime = $("#startTime").val(),
        inputStopTime = $("#stopTime").val(),
        inputEventCity = $("#eventCity").val(),
        inputEventVenue = $("#eventVenue").val(),
        inputBudget = $("#budget").val(),
        inputPax = $("#pax").val(),
        inputDetailEvent = $("#detailEvent").val();
    
    
    var blanter_whatsapp = walink + '?phone=' + phone + '&text=' + walink2 + '%0A%0A' +
        '*Name* : ' + inputCustomerName + '%0A' +
        '*Acara dimulai : ' + inputCheckIn + ' pukul ' + inputStartTime +'%0A' +
        '*Acara berakhir : ' + inputCheckOut + ' pukul ' + inputStopTime +'%0A' +
        '*Lokasi Acara* : ' + inputEventVenue + ', ' + inputEventCity + '%0A' +
        '*Budget Maximal* : ' + inputBudget + '%0A' +
        '*Pax* : ' + inputPax + '%0A' +
        '*Detail Acara* : ' + inputDetailEvent + '%0A';

        
    
    // var inputDetail = $("$detail").text(),
    //     inputLocate = $("$locate").val(),
    //     inputCustomerName = $("#waName").val(),
    //     inputTanggalAcara = $("$waCheckInDate").val(),
    //     inputTanggalBerakhirAcara = $("$waCheckOutDate").val(),
    //     inputStart = $("$start").val(),
    //     inputStop = $("$top").val(),
    //     inputVenue = $("$venue").val(),
    //     inputBudget = $("$budget").val(),
    //     inputPax = $("$pax").val();
       
    
    // var blanter_whatsapp = walink + '?phone=' + phone + '&text=' + walink2 + '%0A%0A' +
    //     '*Name* : ' + inputCustomerName + '%0A' +
    //     '*Mulai Acara* : ' + inputTanggalAcara + '-' + inputStart+ '%0A' +
    //     '*Berakhir Acara* : ' + inputTanggalBerakhirAcara + '-' + inputStop+ '%0A' +
    //     '*Venue* : ' + inputVenue + '%0A' + inputLocate+
    //     '*Maximal Budget* : ' + inputBudget + '%0A' +
    //     '*Pax* : ' + inputPax + '%0A' +
    //     '*Detail Acara* : ' + inputDetail + '%0A';
    
    /* Whatsapp Window Open */
    window.open(blanter_whatsapp,'_blank');
    document.getElementById("text-info").innerHTML = '<span class="yes">'+text_yes+'</span>';
    } else {
    document.getElementById("text-info").innerHTML = '<span class="no">'+text_no+'</span>';
    }
    });