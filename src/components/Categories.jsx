const Categories = () => {
  const categories = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M13.3333 5.33331H18.6667M16 18.6666V12M26.6667 12L23.25 6.16665C22.7 5.24998 21.7167 4.66665 20.6667 4.66665H11.3333C10.2833 4.66665 9.3 5.24998 8.75 6.16665L5.33333 12C5.33333 17.8916 10.1083 22.6666 16 22.6666C21.8917 22.6666 26.6667 17.8916 26.6667 12Z" stroke="#4640DE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Design",
      count: "235 jobs available",
      isActive: false
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M16 27.3333C22.2592 27.3333 27.3333 22.2592 27.3333 16C27.3333 9.74075 22.2592 4.66666 16 4.66666C9.74075 4.66666 4.66666 9.74075 4.66666 16C4.66666 22.2592 9.74075 27.3333 16 27.3333Z" stroke="#4640DE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 9.33334V16L20.6667 18.3333" stroke="#4640DE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Sales",
      count: "756 jobs available",
      isActive: false
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M28 20V25.3333C28 26.0406 27.719 26.7189 27.219 27.219C26.7189 27.719 26.0406 28 25.3333 28H6.66667C5.95942 28 5.28115 27.719 4.78105 27.219C4.28095 26.7189 4 26.0406 4 25.3333V20" stroke="#4640DE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M22.6667 10.6667L16 4L9.33334 10.6667" stroke="#4640DE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 4V20" stroke="#4640DE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Marketing",
      count: "140 jobs available",
      isActive: false
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M28 6.66666H4V25.3333H28V6.66666Z" stroke="#4640DE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4 12H28" stroke="#4640DE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Finance",
      count: "325 jobs available",
      isActive: false
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M16 20H4" stroke="#4640DE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M28 20H21.3333" stroke="#4640DE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 27.3333H4" stroke="#4640DE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M28 27.3333H21.3333" stroke="#4640DE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10.6667 12.6667H4" stroke="#4640DE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M28 12.6667H16" stroke="#4640DE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10.6667 4.66666L4 4.66666" stroke="#4640DE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M28 4.66666L16 4.66666" stroke="#4640DE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Technology",
      count: "436 jobs available",
      isActive: false
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M17.3333 4L4 19.3333H16L14.6667 28L28 12.6667H16L17.3333 4Z" stroke="#4640DE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Engineering",
      count: "542 jobs available",
      isActive: false
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M26.6667 5.33334H5.33333C4.59695 5.33334 4 5.93029 4 6.66667V25.3333C4 26.0697 4.59695 26.6667 5.33333 26.6667H26.6667C27.403 26.6667 28 26.0697 28 25.3333V6.66667C28 5.93029 27.403 5.33334 26.6667 5.33334Z" stroke="#4640DE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21.3333 4V26.6667" stroke="#4640DE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10.6667 4V26.6667" stroke="#4640DE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4 12H28" stroke="#4640DE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4 20H28" stroke="#4640DE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Business",
      count: "211 jobs available",
      isActive: false
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M22.6667 28V25.3333C22.6667 23.9188 22.1048 22.5623 21.1046 21.5621C20.1044 20.5619 18.7479 20 17.3333 20H6.66668C5.25216 20 3.89563 20.5619 2.89544 21.5621C1.89525 22.5623 1.33334 23.9188 1.33334 25.3333V28" stroke="#4640DE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 14.6667C14.9455 14.6667 17.3333 12.2789 17.3333 9.33333C17.3333 6.38781 14.9455 4 12 4C9.05449 4 6.66666 6.38781 6.66666 9.33333C6.66666 12.2789 9.05449 14.6667 12 14.6667Z" stroke="#4640DE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M30.6667 28V25.3333C30.6662 24.1516 30.2535 23.0037 29.4968 22.0698C28.74 21.1359 27.6775 20.4688 26.5 20.1733" stroke="#4640DE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21.1667 4.17334C22.3479 4.46723 23.4144 5.13488 24.1737 6.07099C24.9331 7.0071 25.3466 8.15868 25.3466 9.34417C25.3466 10.5297 24.9331 11.6812 24.1737 12.6173C23.4144 13.5535 22.3479 14.2211 21.1667 14.515" stroke="#4640DE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Human Resource",
      count: "346 jobs available",
      isActive: false
    }
  ];

  return (
    <section className="categories">
      <div className="container">
        <div className="categories-header">
          <h2>Explore by <span>category</span></h2>
          <a href="#" className="show-all">
            Show all jobs
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4.16666 10H15.8333" stroke="#4640DE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 4.16666L15.8333 10L10 15.8333" stroke="#4640DE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        <div className="categories-grid">
          {categories.map((category, index) => (
            <div key={index} className={`category-card ${category.isActive ? 'active' : ''}`}>
              <div className="category-icon">
                {category.icon}
              </div>
              <h3>{category.title}</h3>
              <p>{category.count}</p>
              <svg className="arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4.16666 10H15.8333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 4.16666L15.8333 10L10 15.8333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories; 