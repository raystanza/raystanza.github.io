source "https://rubygems.org"
# to use diff ver, save the file, run `bundle install`.
# Run Jekyll: `bundle exec jekyll serve`.
# To upgrade, run `bundle update github-pages`.
gem "github-pages", "~> 231", group: :jekyll_plugins

group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.17.0"
  gem "jekyll-avatar", "~> 0.8.0"
  gem "jekyll-github-metadata", "~> 2.16.1"
  gem "jemoji", "~> 0.13.0"
  gem "webrick", "~> 1.8.1"
end

# Windows and JRuby zoneinfo files
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Perf-boost for dir watching (Win)
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]

# Lock `http_parser.rb` gem to `v0.6.x` on JRuby builds
# because newer ver's don't have Java counterpart.
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]
