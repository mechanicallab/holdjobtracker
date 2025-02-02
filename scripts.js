$(document).ready(function() {
  // Switch between tabs when clicked
  $('#holdJobActionTab').click(function() {
    showTab('holdJobAction');
  });

  $('#dashboardTab').click(function() {
    showTab('dashboard');
  });

  // Function to show the selected tab
  function showTab(tabId) {
    $('.tab-content').removeClass('active');
    $('#' + tabId).addClass('active');
    $('.nav-link').removeClass('active');
    $('#' + tabId + 'Tab').addClass('active');
  }
});
