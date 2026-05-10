import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import {
  PencilSquareIcon,
  MagnifyingGlassIcon,
  FolderIcon,
  CodeBracketSquareIcon,
  EllipsisHorizontalIcon,
  ViewColumnsIcon,
  CubeIcon,
  ChevronRightIcon,
  SparklesIcon,
  FaceSmileIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  QuestionMarkCircleIcon,
  ArrowRightOnRectangleIcon,
} from '@heroicons/react/24/outline';

export default function Sidebar({
  isOpen = true,
  onToggle,
  onNewChat = () => {},
}) {
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const profileMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profileMenuRef.current &&
        !profileMenuRef.current.contains(event.target)
      ) {
        setProfileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleMobileBackdropClick = () => {
    setProfileMenuOpen(false);
    onToggle?.();
  };

  const item =
    'group flex w-full items-center rounded-lg text-[14px] font-semibold text-white/90 transition hover:bg-white/[0.07]';

  const icon =
    'h-[18px] w-[18px] shrink-0 text-white/75 transition group-hover:text-white';

  const sectionLabel =
    'text-[11px] font-semibold uppercase tracking-[0.16em] text-white/35';

  const itemStyle = {
    height: '34px',
    paddingLeft: '10px',
    paddingRight: '10px',
    gap: '12px',
  };

  const labelStyle = {
    paddingLeft: '10px',
    marginBottom: '6px',
  };

  const profileMenuItem =
    'group flex w-full items-center gap-2.5 rounded-xl px-3 py-1.5 text-left text-[14px] font-medium text-white/90 transition hover:bg-white/[0.08]';

  const profileMenuIcon =
    'h-[17px] w-[17px] shrink-0 text-white/80 transition group-hover:text-white';

  return (
    <>
      {/* Mobile backdrop: tap right side to close sidebar */}
      {isOpen && (
        <button
          type="button"
          aria-label="Close sidebar"
          onClick={handleMobileBackdropClick}
          className="fixed inset-0 z-30 bg-black/35 backdrop-blur-[1px] lg:hidden"
        />
      )}

      <aside
        className={clsx(
          'fixed inset-y-0 left-0 z-40 w-[min(86vw,280px)] shrink-0 border-r border-white/8 bg-[#090d16] text-white transition-transform duration-200 ease-out lg:static lg:h-screen lg:w-70 lg:translate-x-0',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
        style={{
          height: '100dvh',
        }}
      >
        <div
          className="relative flex h-full min-h-0 flex-col"
          style={{
            paddingLeft: '18px',
            paddingRight: '18px',
            paddingTop: 'max(18px, env(safe-area-inset-top))',
            paddingBottom: 'max(14px, env(safe-area-inset-bottom))',
          }}
        >
          {/* Brand */}
          <div
            className="shrink-0"
            style={{
              paddingLeft: '4px',
              paddingRight: '4px',
            }}
          >
            <div className="flex items-center justify-between">
              <h1 className="text-[34px] font-semibold leading-none tracking-[-0.055em] text-white">
                Jarvice
              </h1>

              <button
                type="button"
                onClick={onToggle}
                aria-label="Toggle sidebar"
                className="grid h-9 w-9 place-items-center rounded-xl text-white/70 transition hover:bg-white/[0.07] hover:text-white"
              >
                <ViewColumnsIcon className="h-5 w-5" />
              </button>
            </div>
          </div>

          <nav
            className="min-h-0 flex-1 overflow-y-auto"
            style={{
              marginTop: '20px',
              paddingRight: '2px',
            }}
          >
            {/* Workspace */}
            <div>
              <p className={sectionLabel} style={labelStyle}>
                Workspace
              </p>

              <div
                className="flex flex-col"
                style={{
                  gap: '3px',
                }}
              >
                <button
                  type="button"
                  onClick={onNewChat}
                  className={clsx(item, 'bg-white/[0.07] text-white')}
                  style={itemStyle}
                >
                  <PencilSquareIcon className={icon} />
                  <span>New chat</span>
                </button>

                <button type="button" className={item} style={itemStyle}>
                  <MagnifyingGlassIcon className={icon} />
                  <span>Search chats</span>
                </button>

                <button type="button" className={item} style={itemStyle}>
                  <FolderIcon className={icon} />
                  <span>Projects</span>
                </button>

                <button type="button" className={item} style={itemStyle}>
                  <CodeBracketSquareIcon className={icon} />
                  <span>Codex</span>
                </button>

                <button type="button" className={item} style={itemStyle}>
                  <CubeIcon className={icon} />
                  <span>Explore GPTs</span>
                </button>

                <button type="button" className={item} style={itemStyle}>
                  <EllipsisHorizontalIcon className={icon} />
                  <span>More</span>
                </button>
              </div>
            </div>

            {/* History */}
            <div
              style={{
                marginTop: '18px',
              }}
            >
              <button
                type="button"
                className="group flex w-full items-center rounded-lg text-[14px] font-semibold text-white transition hover:bg-white/[0.07]"
                style={{
                  height: '34px',
                  paddingLeft: '10px',
                  paddingRight: '10px',
                  gap: '2px',
                }}
              >
                <span>Recents</span>
                <ChevronRightIcon className="h-3.5 w-3.5 text-white/55 transition group-hover:text-white/80" />
              </button>
            </div>
          </nav>

          {/* Profile */}
          <div
            ref={profileMenuRef}
            className="relative shrink-0"
            style={{ paddingTop: '10px' }}
          >
            {profileMenuOpen && (
              <div className="absolute bottom-[58px] left-0 right-0 z-50 overflow-hidden rounded-3xl border border-white/10 bg-[#333333] p-2 shadow-2xl shadow-black/50">
                <button
                  type="button"
                  className="flex w-full items-center gap-2.5 rounded-2xl px-2.5 py-1.5 text-left transition hover:bg-white/[0.08]"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#14b8a6] text-[11px] font-bold leading-none text-white">
                    AB
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[14px] font-semibold leading-5 text-white">
                      Aryan Behera
                    </p>
                    <p className="truncate text-[12px] leading-4 text-white/65">
                      Plus
                    </p>
                  </div>

                  <ChevronRightIcon className="h-4.5 w-4.5 shrink-0 text-white/80" />
                </button>

                <div className="my-1.5 h-px bg-white/12" />

                <div className="space-y-0.5">
                  <button type="button" className={profileMenuItem}>
                    <SparklesIcon className={profileMenuIcon} />
                    <span>Upgrade plan</span>
                  </button>

                  <button type="button" className={profileMenuItem}>
                    <FaceSmileIcon className={profileMenuIcon} />
                    <span>Personalization</span>
                  </button>

                  <button type="button" className={profileMenuItem}>
                    <UserCircleIcon className={profileMenuIcon} />
                    <span>Profile</span>
                  </button>

                  <button type="button" className={profileMenuItem}>
                    <Cog6ToothIcon className={profileMenuIcon} />
                    <span>Settings</span>
                  </button>
                </div>

                <div className="my-1.5 h-px bg-white/12" />

                <div className="space-y-0.5">
                  <button type="button" className={profileMenuItem}>
                    <QuestionMarkCircleIcon className={profileMenuIcon} />
                    <span className="flex-1">Help</span>
                    <ChevronRightIcon className="h-4.5 w-4.5 text-white/80" />
                  </button>

                  <button type="button" className={profileMenuItem}>
                    <ArrowRightOnRectangleIcon className={profileMenuIcon} />
                    <span>Log out</span>
                  </button>
                </div>
              </div>
            )}

            <button
              type="button"
              onClick={() => setProfileMenuOpen((prev) => !prev)}
              className={clsx(
                'flex w-full items-center rounded-xl text-left transition hover:bg-white/[0.07]',
                profileMenuOpen ? 'bg-white/[0.05]' : ''
              )}
              style={{
                height: '52px',
                paddingLeft: '10px',
                paddingRight: '10px',
                gap: '12px',
              }}
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#14b8a6] text-[12px] font-bold leading-none text-white">
                AB
              </div>

              <div className="flex min-w-0 flex-1 flex-col">
                <span className="truncate text-[14px] font-semibold leading-4.5 text-white">
                  Aryan Behera
                </span>
                <span className="truncate text-[13px] font-normal leading-4.25 text-white/65">
                  Plus
                </span>
              </div>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}