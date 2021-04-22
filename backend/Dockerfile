# syntax=docker/dockerfile:1
FROM ruby:2.5.5
RUN apt-get update -qq && apt-get install -y nodejs postgresql-client
WORKDIR /backend
RUN gem install bundler:2.2.16
COPY Gemfile /backend/Gemfile
COPY Gemfile.lock /backend/Gemfile.lock
RUN bundle install
# COPY ./backend /backend

# Add a script to be executed every time the container starts.
# COPY entrypoint.sh /usr/bin/
# RUN chmod +x /usr/bin/entrypoint.sh
# ENTRYPOINT ["entrypoint.sh"]
EXPOSE 3000

# Configure the main process to run when running the image
CMD ["rails", "server", "-b", "0.0.0.0"]
