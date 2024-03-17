const blog = (req, res) => {
    return res.render('blog');
}

const contact = (req, res) => {
    return res.render('contact');
}

module.exports = {
    blog, contact
}