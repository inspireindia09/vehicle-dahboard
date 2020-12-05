$(document).ready(function () {
    var arrSrc0 = [{
        id: '1',
        src: 'https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2020/04/bheem-1587140649.jpg'
    },
    {
        id: '2',
        src: 'https://m.economictimes.com/thumb/msid-76217463,width-1200,height-900,resizemode-4,imgsize-463661/bheem-chose-princess-indumati-a-village-belle-over-his-best-friend-chutki-who-did-so-much-for-him-.jpg'
    },
    {
        id: '3',
        src: 'https://images.indianexpress.com/2020/06/chhota-bheem-1200.jpg'
    },
    {
        id: '4',
        src: 'https://imgk.timesnownews.com/story/chhota_bheem_and_chutki.jpg?tr=w-1200,h-900'
    }
    ]

    let times = 1;
    for (let i = 0; i < times; i++) {
        let dynamicHtml = "<div class='box clickImgBox' data-toggle='modal' data-target='#img1'><div class='video_frame one" + i + "'><img src='https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2020/04/bheem-1587140649.jpg' class='img-fluid'/><div class='action_wrapper'></div></div></div>"
        $('#video-container').append(dynamicHtml);
    }
    $('.video_frame.one0').attr('data-src', JSON.stringify(arrSrc0));

    $('.video_frame').each(function () {
        let src_data = $(this).data('src');
        var img_src, count = 0,
            img_elem = $(this).find('img');
        setInterval(function () {
            if (count < src_data.length) {
                img_src = src_data[count].src;
                img_elem.attr('src', img_src);
                count++;
            } else {
                count = 0;
            }
        }, 100);
    });
    var handle;
    $('.clickImgBox').on('click', function () {
        var img_src, count = 0,
            modal_src = [];
        modal_src = $(this).find('.video_frame').data('src');
        handle = setInterval(function test1() {
            if (count < modal_src.length) {
                img_src = modal_src[count].src;
                $('.modal-body').find('img').attr('src', img_src);
                count++;
            } else {
                count = 0;
            }
        }, 100);
    })
    $('#img1').on('hidden.bs.modal', function (e) {
        clearInterval(handle);
    })

    $('.video-thumbnail').click(function(){
        let img_src = $(this).find('.vid_avatar img').attr('src');
        $('#vechile_img img').attr('src', img_src);
    })

    const elem = document.getElementById('vechile_img');
    const zoomInButton = document.getElementById('zoom-in');
    const zoomOutButton = document.getElementById('zoom-out');
    const resetButton = document.getElementById('reset');
    const panzoom = Panzoom(elem);
    const parent = elem.parentElement
    // No function bind needed
    parent.addEventListener('wheel', panzoom.zoomWithWheel);
    zoomInButton.addEventListener('click', panzoom.zoomIn)
    zoomOutButton.addEventListener('click', panzoom.zoomOut)
    resetButton.addEventListener('click', panzoom.reset) 
    $('#vechile-info').on('hidden.bs.modal', function () {
        Panzoom(elem).reset;  
    });
    

});