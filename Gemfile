source 'https://rubygems.org'

gem 'fastlane'
gem 'activesupport', '>= 6.1.7.3', '< 7.1.0'
gem 'cocoapods'
gem 'rubocop', group: 'development', require: false

plugins_path = File.join(File.dirname(__FILE__), 'fastlane', 'Pluginfile')
eval_gemfile(plugins_path) if File.exist?(plugins_path)
