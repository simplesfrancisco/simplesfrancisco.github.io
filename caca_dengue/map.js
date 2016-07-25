d_width = $(window).width();
d_width_6 = d_width / 6;
d_width_4 = d_width / 4;
d_width_2 = d_width / 2;

function col_eq(seletor, largura){
	$(seletor).css('width', largura);
	$(seletor).css('height', $(seletor).width());
	$(seletor).css('width', $(seletor).height());
}

function v_center(seletor, container){
	$(seletor).css('margin-top', ($(container).height() / 2) - ($(seletor).height() / 2));
}


// Ações de jogadores
for (i = 0; i < 5; i++) {
	$('.arena').append('<span class="field field-'+i+'"></span>');
}

for (i = 0; i < 16; i++) {
	$('.field').append('<span class="ch" data-target="'+i+'"></span>');
}

col_eq('.field', '80%');
col_eq('.ch', '25%');
v_center('.field', window);

$('.field-0').attr('data-key', '8');
$('.field-0').css('background-image', 'url(img/bg0-9.jpg)');

$('.field-1').attr('data-key', '9');
$('.field-1').css('background-image', 'url(img/bg1-10.jpg)');

$('.field-2').attr('data-key', '0');
$('.field-2').css('background-image', 'url(img/bg2-1.jpg)');

$('.field-3').attr('data-key', '12');
$('.field-3').css('background-image', 'url(img/bg3-13.jpg)');

$('.field-4').attr('data-key', '5');
$('.field-4').css('background-image', 'url(img/bg4-6.jpg)');

$('.field-0').addClass('current');

$('.ch').on('click', function(){
	if(!$(this).parent().find('.ch').hasClass('active')){
		_key = $(this).parent().attr('data-key');
		_choice = $(this).attr('data-target');
		if(_choice == _key){
			$(this).parent().addClass('complete');
			$(this).parent().removeClass('current');
			$(this).parent().next().addClass('current').show();
			if($('.field-4').hasClass('complete')){
				$('.arenaOver').show();
			}
		} else {
			$('.arenaGameOver').show();
		}
	}
	$('.field.complete').hide();
});

$('.field:not(.current)').hide();

v_center('.arenaInner', window);

function jogar(){
	$('.arenaStart').hide();
}

function recomecar(){
	location.reload();
}

$('.arenaOver').hide();

$('.arenaGameOver').hide();