import { Fragment } from 'react';
import LazyImage from '../lazy-image';
import { ga, skeleton } from '../../utils';
import { SanitizedExternalProject } from '../../interfaces/sanitized-config';

const isFeatured = (item: SanitizedExternalProject): boolean =>
  Boolean(item.situation || item.task || item.action || item.result || item.techStack);

const ExternalProjectCard = ({
  externalProjects,
  header,
  subtitle,
  loading,
  googleAnalyticId,
}: {
  externalProjects: SanitizedExternalProject[];
  header: string;
  subtitle?: string;
  loading: boolean;
  googleAnalyticId?: string;
}) => {
  const featuredProjects = externalProjects.filter(isFeatured);
  const legacyProjects = externalProjects.filter((item) => !isFeatured(item));

  const trackClick = (title: string) => {
    try {
      if (googleAnalyticId) {
        ga.event('Click External Project', {
          post: title,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < externalProjects.length; index++) {
      array.push(
        <div className="card shadow-lg compact bg-base-100" key={index}>
          <div className="p-8 h-full w-full">
            <div className="flex items-center flex-col">
              <div className="w-full">
                <div className="flex items-start px-4">
                  <div className="w-full">
                    <h2>
                      {skeleton({
                        widthCls: 'w-32',
                        heightCls: 'h-8',
                        className: 'mb-2 mx-auto',
                      })}
                    </h2>
                    <div className="avatar w-full h-full">
                      <div className="w-24 h-24 mask mask-squircle mx-auto">
                        {skeleton({
                          widthCls: 'w-full',
                          heightCls: 'h-full',
                          shape: '',
                        })}
                      </div>
                    </div>
                    <div className="mt-2">
                      {skeleton({
                        widthCls: 'w-full',
                        heightCls: 'h-4',
                        className: 'mx-auto',
                      })}
                    </div>
                    <div className="mt-2 flex items-center flex-wrap justify-center">
                      {skeleton({
                        widthCls: 'w-full',
                        heightCls: 'h-4',
                        className: 'mx-auto',
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>,
      );
    }

    return array;
  };

  const renderStarRow = (label: string, value?: string) => {
    if (!value) {
      return null;
    }

    return (
      <div className="text-sm">
        <span className="font-semibold text-base-content opacity-80">
          {label}:
        </span>{' '}
        <span className="text-base-content opacity-60">{value}</span>
      </div>
    );
  };

  const renderFeaturedProjects = () => {
    return featuredProjects.map((item, index) => (
      <a
        className="card shadow-lg compact bg-base-100 cursor-pointer block"
        key={index}
        href={item.link || undefined}
        onClick={(e) => {
          if (!item.link) {
            return;
          }

          e.preventDefault();
          trackClick(item.title);

          window?.open(item.link, '_blank', 'noopener,noreferrer');
        }}
      >
        <div className="p-8 h-full w-full">
          <div className="text-sm font-medium text-base-content opacity-50">
            {String(index + 1).padStart(2, '0')} &mdash; {item.title}
          </div>
          {item.subtitle && (
            <div className="text-xl font-semibold text-base-content mt-1">
              {item.subtitle}
            </div>
          )}
          {item.description && (
            <p className="mt-3 text-base-content opacity-60 text-sm text-justify">
              {item.description}
            </p>
          )}
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
            {renderStarRow('Situation', item.situation)}
            {renderStarRow('Task', item.task)}
            {renderStarRow('Action', item.action)}
            {renderStarRow('Result', item.result)}
          </div>
          {item.techStack && item.techStack.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="text-sm text-base-content opacity-50 mr-1">
                Tech Stack:
              </span>
              {item.techStack.map((tech, techIndex) => (
                <span
                  className="badge badge-outline badge-sm"
                  key={techIndex}
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </a>
    ));
  };

  const renderLegacyProjects = () => {
    return legacyProjects.map((item, index) => (
      <a
        className="card shadow-lg compact bg-base-100 cursor-pointer"
        key={index}
        href={item.link || undefined}
        onClick={(e) => {
          if (!item.link) {
            return;
          }

          e.preventDefault();
          trackClick(item.title);

          window?.open(item.link, '_blank', 'noopener,noreferrer');
        }}
      >
        <div className="p-8 h-full w-full">
          <div className="flex items-center flex-col">
            <div className="w-full">
              <div className="px-4">
                <div className="text-center w-full">
                  <h2 className="font-medium text-center opacity-60 mb-2">
                    {item.title}
                  </h2>
                  {item.imageUrl && (
                    <div className="avatar opacity-90">
                      <div className="w-24 h-24 mask mask-squircle">
                        <LazyImage
                          src={item.imageUrl}
                          alt={item.title}
                          placeholder={skeleton({
                            widthCls: 'w-full',
                            heightCls: 'h-full',
                            shape: '',
                          })}
                        />
                      </div>
                    </div>
                  )}
                  <p className="mt-2 text-base-content opacity-60 text-sm text-justify">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    ));
  };

  return (
    <Fragment>
      <div className="col-span-1 lg:col-span-2">
        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-2">
            <div className="card compact bg-base-100/40 shadow">
              <div className="card-body">
                <div className="mx-3 flex items-center justify-between mb-2">
                  <h5 className="card-title">
                    {loading ? (
                      skeleton({ widthCls: 'w-40', heightCls: 'h-8' })
                    ) : (
                      <span className="text-base-content opacity-70">
                        {header}
                      </span>
                    )}
                  </h5>
                </div>
                {subtitle && (
                  <p className="mx-3 mb-4 text-sm text-base-content opacity-60">
                    {subtitle}
                  </p>
                )}
                <div className="col-span-2">
                  <div className="grid grid-cols-1 gap-6">
                    {loading ? (
                      renderSkeleton()
                    ) : (
                      <>
                        {renderFeaturedProjects()}
                        {legacyProjects.length > 0 && (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {renderLegacyProjects()}
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ExternalProjectCard;