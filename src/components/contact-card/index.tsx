import { FormEvent, useState } from 'react';
import { skeleton } from '../../utils';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

const inputClass = 'input input-bordered w-full text-sm bg-base-100/40';
const textareaClass = 'textarea textarea-bordered w-full text-sm bg-base-100/40';

const ContactCard = ({
  email,
  loading,
}: {
  email: string;
  loading: boolean;
}) => {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append('_subject', 'New message from your portfolio');
    formData.append('_template', 'table');
    formData.append('_captcha', 'false');

    setStatus('sending');

    try {
      const response = await fetch(
        `https://formsubmit.co/${encodeURIComponent(email)}`,
        {
          method: 'POST',
          body: formData,
        },
      );

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <div className="card shadow-lg compact bg-base-100">
      <div className="card-body">
        <div className="mx-3 flex items-center justify-between">
          <h5 className="card-title">
            {loading ? (
              skeleton({ widthCls: 'w-32', heightCls: 'h-8' })
            ) : (
              <span className="text-base-content opacity-70">Contact</span>
            )}
          </h5>
          {!loading && (
            <div className="flex items-center gap-2">
              <a
                className="btn btn-outline btn-xs"
                href={`mailto:${email}`}
                title="Email me directly"
              >
                Email
              </a>
              <button
                type="button"
                className="btn btn-outline btn-xs"
                onClick={handleCopyEmail}
                title="Copy email address"
              >
                {copied ? 'Copied!' : 'Copy Email'}
              </button>
            </div>
          )}
        </div>
        <div className="mx-3 text-base-content opacity-70">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-3">
            <input
              type="text"
              name="name"
              required
              placeholder="Name"
              className={inputClass}
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              className={inputClass}
            />
            <textarea
              name="message"
              rows={4}
              required
              placeholder="Message"
              className={textareaClass}
            />
            <button
              type="submit"
              className="btn btn-primary btn-sm"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
            {status === 'success' && (
              <p className="text-sm text-success">
                Message sent successfully!
              </p>
            )}
            {status === 'error' && (
              <p className="text-sm text-error">
                Failed to send the message. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;