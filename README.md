# kaggledatasets.github.io

Official Website of Kaggle Datasets

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Following are the packages/frameworks requried to get this site up and running.  

- [Ruby](https://www.ruby-lang.org/en/)
- [Jekyll](https://jekyllrb.com/)
- [Bootstrap](https://getbootstrap.com/)

### Setup

Clone the repository:  

```bash
git clone https://github.com/kaggledatasets/kaggledatasets.github.io
cd kaggledatasets.github.io
```

Install the Ruby gems:

```bash
gem install bundler
bundle install
```

Start the website:

```bash
bundle exec jekyll serve
```

## Deployments

The website is hosted on Github Pages at [https://kaggledatasets.github.io](https://kaggledatasets.github.io).
To deploy changes, merge your latest code into the `master` branch. A build will be automatically built and committed to the master branch via a Travis CI job.

## License

This website is Apache-2.0 licensed, as found in the [LICENSE](LICENSE) file.
