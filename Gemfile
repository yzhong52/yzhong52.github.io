source "https://rubygems.org"

gem "github-pages", group: :jekyll_plugins

# If you have any plugins, put them here!
group :jekyll_plugins do
  gem "jekyll-paginate"
  gem "jekyll-sitemap"
  gem "jekyll-gist"
  gem "jekyll-feed"
  gem "jemoji"
  gem "jekyll-include-cache"
  gem "jekyll-algolia"

  # For tags and collections support
  # https://mmistakes.github.io/minimal-mistakes/docs/configuration/#archive-settings
  # https://github.com/jekyll/jekyll-archives/blob/master/docs/configuration.md
  # TODO: Yuchen - this doens't work well with tags in custom collections other than post
  # gem "jekyll-archives"

  # https://github.com/ashmaroli/jekyll-tagories
  # gem "jekyll-tagories"
end

# TODO: Yuchen - https://github.com/yzhong52/yzhong52.github.io/issues/2
# There is a known issue with ruby 3.0 and jekyll
# https://talk.jekyllrb.com/t/load-error-cannot-load-such-file-webrick/5417
gem "webrick", "~> 1.7"
