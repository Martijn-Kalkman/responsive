// $(document).ready(function () {
//     let menuScrollTimer = null;
//     $(".nav a").click(function (e) {
//         // Prevent default behaviour ( scroll to element )
//         e.preventDefault();
//         if (menuScrollTimer === null) {
//             // Highlight the clicked item
//             $('.nav a.active').removeClass('active');
//             $(this).addClass('active');
//             // Smooth scroll to the target section
//             let target = $(this).attr('href');
//             $('html, body').animate({ scrollTop: $(target).offset().top - 100 }, 1050);
//             // Set `menuScrollTimer` timer
//             // This will prevents multiple clicks on menu items whule the smooth scroll is taking effect
//             // This will also prevent the scroll logic from running
//             menuScrollTimer = setTimeout(function () {
//                 clearTimeout(menuScrollTimer);
//                 menuScrollTimer = null;
//             }, 1050);
//         }
//     });

//     $(window).scroll(function (e) {
//         // Avoid triggering the logic if the scroll event is triggerd from clicking one of the items
//         if (menuScrollTimer === null) {
//             let windowTop = $(this).scrollTop();

//             $('.nav a').each(function (event) {
//                 if (windowTop >= $($(this).attr('href')).offset().top - 100) {
//                     $('.nav .active').removeClass('active');
//                     $(this).addClass('active');
//                 }
//             });
//         }
//     });
// });
