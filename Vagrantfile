VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  config.vm.box = "ubuntu/trusty64"
  config.vm.provision "shell", path: "provision.sh"

  config.vm.synced_folder "./projects/", "/home/vagrant/projects", id: "vagrant-root"
  config.vm.network :forwarded_port, guest: 9292, host: 9292
  config.vm.network :forwarded_port, guest: 22, host: 2223, id: 'ssh'

end
