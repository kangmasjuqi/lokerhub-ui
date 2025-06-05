import { useLocation } from 'react-router-dom';

const Breadcrumb = () => {
  const { pathname } = useLocation();
  const crumbs = pathname.split('/').filter(Boolean);

  return (
    <nav className="text-sm mb-4">
      <ol className="list-reset flex text-gray-600 space-x-2">
        <li><a href="/">Home</a></li>
        {crumbs.map((crumb, i) => (
          <li key={i}>
            <span className="mx-1">/</span>
            {crumb.charAt(0).toUpperCase() + crumb.slice(1)}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
