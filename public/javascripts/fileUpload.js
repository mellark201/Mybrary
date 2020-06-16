const rootStyle = window.getComputedStyle(document.documentElement)
if(rootStyle.getPropertyValue('--book-cover-width-large') != null && rootStyle.getPropertyValue('--book-cover-width-large') != "") {
    ready()
} else {
    document.getElementById('main-css').addEventListener('load', ready);
}
console.log('Hello');
function ready() {
    const coverWidth = parseFloat(rootStyle.getPropertyValue('--book-cover-width-large'))
    const coverRatio = parseFloat(rootStyle.getPropertyValue('--book-cover-aspect-ratio'))
    console.log(coverWidth);
    const coverHeight = coverWidth / coverRatio
    FilePond.registerPlugin(
        FilePondPluginImagePreview,
        FilePondPluginFileEncode,
        FilePondPluginImageResize,
    )

    FilePond.setOptions({
        stylePanelAspectRatio: 1 / coverRatio,
        imageResizeTargetWidth: coverWidth,
        imageResizeTargetHeight: coverHeight,
    })
}

FilePond.parse(document.body);