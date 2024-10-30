function climatemonitor() {
    return "[cm_chart title=\"Temperatur\" chart=\"temp\" trendline=\"no\" day=\"Today\" v_title=\"Temperatur\" width=\"800px\" height=\"400px\" ] ";
}

(function() {

    tinymce.create('tinymce.plugins.climatemonitor', {

        init : function(ed, url){
            ed.addButton('climatemonitor', {
                title : 'Füge den Klima Monitor Shortcode hinzu',
                onclick : function() {
                    ed.execCommand(
                        'mceInsertContent',
                        false,
                        climatemonitor()
					);
                },
                image: url + "../../img/wetter.png"
            });
        },

        getInfo : function() {
            return {
                longname : 'Climate Monitor plugin button',
                author : 'Dogcrafter',
                authorurl : 'https://blog.dogcrafter.de',
                infourl : '',
                version : "1.0.3"
            };
        }
    });

    tinymce.PluginManager.add('climatemonitor', tinymce.plugins.climatemonitor);
})();

