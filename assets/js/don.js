$(document).ready(function() {
    var frequencySelected = '#grid-once';

    $('input[name="don-frequency"]').on('click', function() {
        const target = $(this).data('display-target');

        frequencySelected = target;
        $('.price-grid').hide();
        $(target).show();
        
        $('.input-free-amount').val('');

        calculateDefisc(frequencySelected, false);
    });

    $('.btn.link-don').on('click', function() {
        $(this).parents('.price-grid').find('.btn.link-don').removeClass('active');
        $(this).addClass('active');

        $('.input-free-amount').val('');
        calculateDefisc(frequencySelected, false);
    })

    $('.input-free-amount').on('input', function() {
        const val = $(this).val();
        
        if (!val)
        return false;
        
        const nb = Number($(this).val());
            
        if (!isNaN(nb)) {
            $('.remise .chosen-amount').text(nb);
            calculateDefisc(frequencySelected, true);
        }
    })



    // INIT
    $('#don-once').trigger('click');
    
    // const defaultOnceAmount = $('#grid-once').find('.btn.link-don').data('amount');

    // calculateDefisc(frequencySelected, false);
});


function calculateDefisc(frequency, isFreeAmount = false) {
    const amount = isFreeAmount ? $(frequency).find('.input-free-amount').val() : $(frequency).find('.btn.link-don.active').data('amount');

    $('.remise .chosen-amount').text(amount);

    const remise = (+amount * 66 / 100).toFixed(2);
    const calculatedAmount = +amount - remise;
    $('.remise .calculated-amount').text(calculatedAmount.toFixed(2));

    const btnDon = $(frequency).find('.button-free-amount');

    addOrModifyQueryParameter(btnDon, 'free_amount', isFreeAmount ? '1' : '0');
    addOrModifyQueryParameter(btnDon, 'amount', parseInt(amount * 100));
    addOrModifyQueryParameter(btnDon, 'frequency', frequency === '#grid-once' ? 'once' : 'regular');
}