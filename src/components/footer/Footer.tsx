export const Footer = () => {
  const socialLinks = ['Yt', 'Fb', 'Tw', 'Ig']

  return (
    <div role="contentinfo" className="container py-14">
      <div className="flex flex-col md:flex-row justify-between gap-8">
        <div className="flex flex-col md:flex-row gap-14">
          <div className="w-full h-[240px] md:w-[360px] md:h-[360px] bg-gray-200" />
          <div className="flex flex-col font-bold">
            <div className="flex-1">
              <div className="text-primary text-4xl font-bold py-6">
                Dealerz.
              </div>
              <div className="space-x-2">
                <a href="/">Privacy policy</a>
                <a href="/">Terms and conditions</a>
              </div>
            </div>
            <span>@2020 TanahAir Studio. All rights reserved.</span>
          </div>
        </div>
        <div>
          <div className="flex gap-4">
            {socialLinks.map((label) => (
              <div
                key={label}
                className="flex items-center justify-center rounded-full bg-primary w-10 h-10 text-white"
              >
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
