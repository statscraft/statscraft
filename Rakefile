desc "clean"
task :clean do
  rm_rf 'output'
  FileList['**/*.bak'].clear_exclude.each do |f|
    rm_f f
  end
end

desc "build the site"
task :build do
  sh "bundle exec jekyll build"
end

desc "Default task is to clean and build"
task :default => [ :clean, :build ]
  puts "Task complete"
end
