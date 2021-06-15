 const authorsEl = document.querySelectorAll('.author');
        const container = document.querySelector('.testimonials-container');
        const nameEl = document.querySelector('.name');
        const textEl = document.querySelector('.text');
        
        const testimonials = [{
          text: '“I just wanted to share a quick note and let you know that you guys do a really good job. I’m glad I decided to work with you. It’s really great how easy your websites are to update and manage. I never have any problem at all. My new site is so much faster and easier to work with than my old site. It used to take me an hour or more to update a page and I would still sometimes screw things up. Now it’s almost like having a designer right here with me. I just choose the page, make the change and click save. It’s so simple. Thanks, guys!”',
          name: 'Lucio Almeida',
          color: 'rgba(32, 191, 107,1.0)' },
        {
        text: 'When it comes to digital marketing there are loads of commentators that talk a good game, but Sonja and Sharon help you make it happen. They have enabled me, coached me and given me the confidence to share Wealth Horizon’s story widely. It’s engaging customers and industry commentators alike, and bringing our new business great results.',
          name: 'Cristina Silva',
          color: 'rgba(165, 94, 234,1.0)' },
        {
          text: 'I hired Florin Pop based on others positive experiences, and I understand why he\'s so highly rated. His code is very clean, he communicates well, and he likes to offer alternative solutions.',
          name: 'Ana Melo',
          color: 'rgba(235, 59, 90,1.0)' }];
        
        
        addTestimonial(0);
        
        authorsEl.forEach((author, idx) => {
          author.addEventListener('click', e => {
            addTestimonial(idx);
            author.classList.add('selected');
          });
        });
        
        function addTestimonial(idx) {
          const testimonial = testimonials[idx];
        
          nameEl.innerHTML = testimonial.name;
          textEl.innerHTML = testimonial.text;
          container.style.background = testimonial.color;
          container.style.boxShadow = `0 35px 10px -20px ${testimonial.color.substring(0, testimonial.color.length - 4)}0.9)`;
        
          authorsEl.forEach(author => {
            author.classList.remove('selected');
          });
        }