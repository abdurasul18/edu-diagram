module.exports = {
  // purge: {
  //   enabled: true,
  //   content: ['./public/**/*.html'],
  // },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors : {
        'first' : '#333333',
        'main-bg' : '#E5E5E5',
        'third' : '#9630E5',
        'fourth' : '#4844FF',
        'fifth' : '#19A361',
        'six' : '#E53B30',
        'seven' : '#00068B',
        "color-2" : "#01004A"
      },
      fontSize : {
        '2xl' : ['24px', '24px'],
        '3xl' : ['34px', '38px'],
        '7xl' : ['80px', '96px']
      },
      container: {
        padding: {
          DEFAULT: '1rem',
        },
        margin : '0 auto',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
