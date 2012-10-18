//general application code only
$(function() {
	//set up url for nav
	var path = '',
		current_location = window.location.pathname;
	if( current_location.indexOf('patterns') > -1) {
		path = '../../';
	}
	//patterns dropdown items
	var menu_items = {
		patterns: [{
			name: 'Type',
			url: path+'patterns/type/type.html'
		},
		{
			name: 'Buttons',
			url: path+'patterns/buttons/buttons.html'
		},
		{
			name: 'Grid',
			url: path+'patterns/grid/grid.html'
		},
		{
			name: 'Nested Grid',
			url: path+'patterns/grid/grid2.html'
		},
		{
			name: 'Forms',
			url: path+'patterns/forms/forms.html'
		},
		{
			name: 'Notifications',
			url: path+'patterns/notifications/notifications.html'
		},
		{
			name: 'Login Page',
			url: path+'patterns/loginpage/loginpage.html'},
		{
			name: 'Datatable',
			url: path+'patterns/datatable/datatable.html'
		},
		{
			name: 'Fatheader',
			url: path+ 'patterns/fatheader/fatheader.html'
		},
		{
			name:'Global Header',
			url: path+'patterns/global_header/global_header.html'

		},
		{
			name: 'Tabs',
			url: path+'patterns/tabs/tabs.html'
		},
		{
			name: 'Auto Complete',
			url: path+'patterns/autocomplete/autocomplete.html'
		},
		{
			name: 'Pagination',
			url: path+'patterns/pagination/pagination.html'
		},
		{
			name: 'Accordian',
			url: path+'patterns/accordian/accordian.html'
		}]

		
	},
	navTemplate = '<ul class="dropdown-menu">{{#patterns}}<li><a href="{{url}}">{{name}}</a></li>{{/patterns}}</ul>',
	html = Mustache.to_html(navTemplate, menu_items);
	$('#pattern-menu').append(html);
	$('.dropdown-toggle').dropdown();

	// var modal = $('<div />', {
	// 	'id': 'modal',
	// 	'class': 'modal hide fade',
	// 	'html': '<div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button><h3>UPDATE NOTICE</h3></div><div class="modal-body"><h1 class="alert alert-error">All new work must be done on a new branch that was created from a clean, up-to-date master branch. Delete all your old local branches and update master before you proceed.</h1></div>'
	// }).appendTo('body').modal();
});