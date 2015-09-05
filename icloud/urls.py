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
    url(r'^search/', 'ifile.views.test_post')
)
