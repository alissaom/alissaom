var Work = {
    sort: function(items) {
        items.show();
        $('#work-content').find('div.work-item').not(items).fadeOut(500);
    },
    showAll: function(items) {
        items.fadeIn(500);
    },
    doSort: function() {
        $('a', '#work-sort').on('click', function() {

            var $a = $(this);
            if (!$a.is('#all')) {

                var items = $('div[data-cat=' + $a.data('cat') + ']', '#work-content');

                Work.sort(items);

            } else {

                Work.showAll($('div.work-item', '#work-content'));


            }

        });
    }
};

Work.doSort();
