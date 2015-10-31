from django.conf.urls import patterns, include, url

from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    url(r'^$', 'ifile.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),
    url(r'^callback', 'ifile.views.upload_callback'),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^test/', 'ifile.views.test_home'),
    url(r'^search/', 'ifile.views.test_post'),
    url(r'^demo/', 'ifile.views.demo'),
    url(r'^doora/$', 'doora.views.home'),
    url(r'^doora/publish', 'doora.views.publish'),
    url(r'^doora/submit', 'doora.views.submit'),
    url(r'^summernote/', include('django_summernote.urls')),
    url(r'^post/(?P<pid>\d+)/', 'doora.views.show_post'),
    url(r'^location/', 'doora.views.location'),
    url(r'^search', 'doora.views.search'),
)
