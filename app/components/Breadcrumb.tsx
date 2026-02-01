import Link from 'next/link';
import { BreadcrumbItem } from '@/lib/types';

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <div className="block-topic-path">
      <ul className="block-topic-path--list">
        {items.map((item, index) => (
          <li
            key={index}
            className={`block-topic-path--category-item ${
              index === items.length - 1 ? 'block-topic-path--item__current' : ''
            } ${index === 0 ? 'block-topic-path--item__home' : ''}`}
          >
            {index > 0 && ' / '}
            {item.href ? (
              <Link href={item.href}>
                <span>{item.label}</span>
              </Link>
            ) : (
              <span>{item.label}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
