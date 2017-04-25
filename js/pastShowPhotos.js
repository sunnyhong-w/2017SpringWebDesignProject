var photos = ['fairytale_perform_-7.jpg',
		'fairytale_perform_01.jpg',
		'fairytale_perform_02.jpg',
		'fairytale_perform_03.jpg',
		'fairytale_perform_04.jpg',
		'fairytale_perform_05.jpg',
		'fairytale_perform_06.jpg',
		'fairytale_perform_08.jpg',
		'fairytale_perform_09.jpg',
		'fairytale_perform_10.jpg',
		'fairytale_perform_100.jpg',
		'fairytale_perform_101.jpg',
		'fairytale_perform_102.jpg',
		'fairytale_perform_103.jpg',
		'fairytale_perform_104.jpg',
		'fairytale_perform_105.jpg',
		'fairytale_perform_106.jpg',
		'fairytale_perform_107.jpg',
		'fairytale_perform_108.jpg',
		'fairytale_perform_109.jpg',
		'fairytale_perform_11.jpg',
		'fairytale_perform_12.jpg',
		'fairytale_perform_13.jpg',
		'fairytale_perform_14.jpg',
		'fairytale_perform_15.jpg',
		'fairytale_perform_16.jpg',
		'fairytale_perform_17.jpg',
		'fairytale_perform_19.jpg',
		'fairytale_perform_20.jpg',
		'fairytale_perform_21.jpg',
		'fairytale_perform_22.jpg',
		'fairytale_perform_23.jpg',
		'fairytale_perform_24.jpg',
		'fairytale_perform_25.jpg',
		'fairytale_perform_26.jpg',
		'fairytale_perform_27.jpg',
		'fairytale_perform_28.jpg',
		'fairytale_perform_29.jpg',
		'fairytale_perform_30.jpg',
		'fairytale_perform_31.jpg',
		'fairytale_perform_32.jpg',
		'fairytale_perform_33.jpg',
		'fairytale_perform_34.jpg',
		'fairytale_perform_35.jpg',
		'fairytale_perform_36.jpg',
		'fairytale_perform_37.jpg',
		'fairytale_perform_38.jpg',
		'fairytale_perform_39.jpg',
		'fairytale_perform_40.jpg',
		'fairytale_perform_41.jpg',
		'fairytale_perform_42.jpg',
		'fairytale_perform_43.jpg',
		'fairytale_perform_44.jpg',
		'fairytale_perform_45.jpg',
		'fairytale_perform_46.jpg',
		'fairytale_perform_47.jpg',
		'fairytale_perform_48.jpg',
		'fairytale_perform_49.jpg',
		'fairytale_perform_50.jpg',
		'fairytale_perform_51.jpg',
		'fairytale_perform_52.jpg',
		'fairytale_perform_53.jpg',
		'fairytale_perform_54.jpg',
		'fairytale_perform_55.jpg',
		'fairytale_perform_56.jpg',
		'fairytale_perform_57.jpg',
		'fairytale_perform_58.jpg',
		'fairytale_perform_59.jpg',
		'fairytale_perform_60.jpg',
		'fairytale_perform_61.jpg',
		'fairytale_perform_62.jpg',
		'fairytale_perform_63.jpg',
		'fairytale_perform_64.jpg',
		'fairytale_perform_65.jpg',
		'fairytale_perform_66.jpg',
		'fairytale_perform_67.jpg',
		'fairytale_perform_68.jpg',
		'fairytale_perform_69.jpg',
		'fairytale_perform_70.jpg',
		'fairytale_perform_71.jpg',
		'fairytale_perform_72.jpg',
		'fairytale_perform_73.jpg',
		'fairytale_perform_74.jpg',
		'fairytale_perform_75.jpg',
		'fairytale_perform_76.jpg',
		'fairytale_perform_77.jpg',
		'fairytale_perform_78.jpg',
		'fairytale_perform_79.jpg',
		'fairytale_perform_80.jpg',
		'fairytale_perform_81.jpg',
		'fairytale_perform_82.jpg',
		'fairytale_perform_83.jpg',
		'fairytale_perform_84.jpg',
		'fairytale_perform_85.jpg',
		'fairytale_perform_86.jpg',
		'fairytale_perform_87.jpg',
		'fairytale_perform_88.jpg',
		'fairytale_perform_89.jpg',
		'fairytale_perform_90.jpg',
		'fairytale_perform_91.jpg',
		'fairytale_perform_92.jpg',
		'fairytale_perform_93.jpg',
		'fairytale_perform_94.jpg',
		'fairytale_perform_95.jpg',
		'fairytale_perform_96.jpg',
		'fairytale_perform_97.jpg',
		'fairytale_perform_98.jpg',
		'fairytale_perform_99.jpg',
		'fairytale_perform_v18.jpg'
	],
	prefix = 'image/演出/怪怪格林童話/演出/',
	thumbnailPrefix = 'image/演出/怪怪格林童話/演出/thumbnails/';

$(function() {
	var $photosContainer = $('.photos > .container > .row');
	for (var i = 0; i < photos.length; i++) {
		var $col = $('<div class="col-xs-6 col-sm-4 col-md-2"></div>');
		var $photo = $('<div class="photo"></div>')
			.css('background-image', 'url(' + thumbnailPrefix + photos[i] + ')')
			.attr('data-img', photos[i]);
		$col.append($photo);
		$photosContainer.append($col);

		$photo.click(function(e){
			var photo = e.target.getAttribute('data-img');
			$('#modal').modal('show');
			$('#modal .modal-content').html('<img src="' + prefix + photo + '" width="100%">');
		})
	}
})