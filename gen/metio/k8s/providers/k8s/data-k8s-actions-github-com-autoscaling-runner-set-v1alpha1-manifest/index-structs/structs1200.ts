import * as cdktf from 'cdktf';
import { DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersEnv,
dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersEnvToTerraform,
dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersEnvToHclTerraform,
DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersEnvList,
DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersEnvFrom,
dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersEnvFromToTerraform,
dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersEnvFromToHclTerraform,
DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersEnvFromList,
DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersLifecycle,
dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersLifecycleToTerraform,
dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersLifecycleToHclTerraform,
DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersLifecycleOutputReference,
DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersLivenessProbe,
dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersLivenessProbeToTerraform,
dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersLivenessProbeToHclTerraform,
DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersLivenessProbeOutputReference,
DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersPorts,
dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersPortsToTerraform,
dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersPortsToHclTerraform,
DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersPortsList,
DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersReadinessProbe,
dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersReadinessProbeToTerraform,
dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersReadinessProbeToHclTerraform,
DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersReadinessProbeOutputReference,
DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersResizePolicy,
dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersResizePolicyToTerraform,
dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersResizePolicyToHclTerraform,
DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersResizePolicyList,
DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersResources,
dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersResourcesToTerraform,
dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersResourcesToHclTerraform,
DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersResourcesOutputReference,
DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersSecurityContext,
dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersSecurityContextToTerraform,
dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersSecurityContextToHclTerraform,
DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersSecurityContextOutputReference,
DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersStartupProbe,
dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersStartupProbeToTerraform,
dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersStartupProbeToHclTerraform,
DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersStartupProbeOutputReference,
DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersVolumeDevices,
dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersVolumeDevicesToTerraform,
dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersVolumeDevicesToHclTerraform,
DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersVolumeDevicesList,
DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersVolumeMounts,
dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersVolumeMountsToTerraform,
dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersVolumeMountsToHclTerraform,
DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersVolumeMountsList,
DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecAffinity,
dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecAffinityToTerraform,
dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecAffinityToHclTerraform,
DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecAffinityOutputReference,
DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecContainers,
dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecContainersToTerraform,
dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecContainersToHclTerraform,
DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecContainersList,
DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecDnsConfig,
dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecDnsConfigToTerraform,
dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecDnsConfigToHclTerraform,
DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecDnsConfigOutputReference,
DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecEphemeralContainers,
dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecEphemeralContainersToTerraform,
dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecEphemeralContainersToHclTerraform,
DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecEphemeralContainersList,
DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecHostAliases,
dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecHostAliasesToTerraform,
dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecHostAliasesToHclTerraform,
DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecHostAliasesList,
DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecImagePullSecrets,
dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecImagePullSecretsToTerraform,
dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecImagePullSecretsToHclTerraform,
DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecImagePullSecretsList } from './structs800'
import { DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateMetadata,
dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateMetadataToTerraform,
dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateMetadataToHclTerraform,
DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateMetadataOutputReference,
DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecListenerTemplate,
dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecListenerTemplateToTerraform,
dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecListenerTemplateToHclTerraform,
DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecListenerTemplateOutputReference,
DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecProxy,
dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecProxyToTerraform,
dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecProxyToHclTerraform,
DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecProxyOutputReference } from './structs400'
import { DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecGithubServerTls,
dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecGithubServerTlsToTerraform,
dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecGithubServerTlsToHclTerraform,
DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecGithubServerTlsOutputReference } from './structs0'
export interface DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainers {
  /**
  * Arguments to the entrypoint. The container image's CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. '$$(VAR_NAME)' will produce the string literal '$(VAR_NAME)'. Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#args DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#args}
  */
  readonly args?: string[];
  /**
  * Entrypoint array. Not executed within a shell. The container image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. '$$(VAR_NAME)' will produce the string literal '$(VAR_NAME)'. Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#command DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#command}
  */
  readonly command?: string[];
  /**
  * List of environment variables to set in the container. Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#env DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#env}
  */
  readonly env?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersEnv[] | cdktf.IResolvable;
  /**
  * List of sources to populate environment variables in the container. The keys defined within a source must be a C_IDENTIFIER. All invalid keys will be reported as an event when the container is starting. When a key exists in multiple sources, the value associated with the last source will take precedence. Values defined by an Env with a duplicate key will take precedence. Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#env_from DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#env_from}
  */
  readonly envFrom?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersEnvFrom[] | cdktf.IResolvable;
  /**
  * Container image name. More info: https://kubernetes.io/docs/concepts/containers/images This field is optional to allow higher level config management to default or override container images in workload controllers like Deployments and StatefulSets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#image DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#image}
  */
  readonly image?: string;
  /**
  * Image pull policy. One of Always, Never, IfNotPresent. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise. Cannot be updated. More info: https://kubernetes.io/docs/concepts/containers/images#updating-images
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#image_pull_policy DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#image_pull_policy}
  */
  readonly imagePullPolicy?: string;
  /**
  * Actions that the management system should take in response to container lifecycle events. Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#lifecycle DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#lifecycle}
  */
  readonly lifecycle?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersLifecycle;
  /**
  * Periodic probe of container liveness. Container will be restarted if the probe fails. Cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#liveness_probe DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#liveness_probe}
  */
  readonly livenessProbe?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersLivenessProbe;
  /**
  * Name of the container specified as a DNS_LABEL. Each container in a pod must have a unique name (DNS_LABEL). Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#name DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * List of ports to expose from the container. Not specifying a port here DOES NOT prevent that port from being exposed. Any port which is listening on the default '0.0.0.0' address inside a container will be accessible from the network. Modifying this array with strategic merge patch may corrupt the data. For more information See https://github.com/kubernetes/kubernetes/issues/108255. Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#ports DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#ports}
  */
  readonly ports?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersPorts[] | cdktf.IResolvable;
  /**
  * Periodic probe of container service readiness. Container will be removed from service endpoints if the probe fails. Cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#readiness_probe DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#readiness_probe}
  */
  readonly readinessProbe?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersReadinessProbe;
  /**
  * Resources resize policy for the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#resize_policy DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#resize_policy}
  */
  readonly resizePolicy?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersResizePolicy[] | cdktf.IResolvable;
  /**
  * Compute Resources required by this container. Cannot be updated. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#resources DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersResources;
  /**
  * RestartPolicy defines the restart behavior of individual containers in a pod. This field may only be set for init containers, and the only allowed value is 'Always'. For non-init containers or when this field is not specified, the restart behavior is defined by the Pod's restart policy and the container type. Setting the RestartPolicy as 'Always' for the init container will have the following effect: this init container will be continually restarted on exit until all regular containers have terminated. Once all regular containers have completed, all init containers with restartPolicy 'Always' will be shut down. This lifecycle differs from normal init containers and is often referred to as a 'sidecar' container. Although this init container still starts in the init container sequence, it does not wait for the container to complete before proceeding to the next init container. Instead, the next init container starts immediately after this init container is started, or after any startupProbe has successfully completed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#restart_policy DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#restart_policy}
  */
  readonly restartPolicy?: string;
  /**
  * SecurityContext defines the security options the container should be run with. If set, the fields of SecurityContext override the equivalent fields of PodSecurityContext. More info: https://kubernetes.io/docs/tasks/configure-pod-container/security-context/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#security_context DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#security_context}
  */
  readonly securityContext?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersSecurityContext;
  /**
  * StartupProbe indicates that the Pod has successfully initialized. If specified, no other probes are executed until this completes successfully. If this probe fails, the Pod will be restarted, just as if the livenessProbe failed. This can be used to provide different probe parameters at the beginning of a Pod's lifecycle, when it might take a long time to load data or warm a cache, than during steady-state operation. This cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#startup_probe DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#startup_probe}
  */
  readonly startupProbe?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersStartupProbe;
  /**
  * Whether this container should allocate a buffer for stdin in the container runtime. If this is not set, reads from stdin in the container will always result in EOF. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#stdin DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#stdin}
  */
  readonly stdin?: boolean | cdktf.IResolvable;
  /**
  * Whether the container runtime should close the stdin channel after it has been opened by a single attach. When stdin is true the stdin stream will remain open across multiple attach sessions. If stdinOnce is set to true, stdin is opened on container start, is empty until the first client attaches to stdin, and then remains open and accepts data until the client disconnects, at which time stdin is closed and remains closed until the container is restarted. If this flag is false, a container processes that reads from stdin will never receive an EOF. Default is false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#stdin_once DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#stdin_once}
  */
  readonly stdinOnce?: boolean | cdktf.IResolvable;
  /**
  * Optional: Path at which the file to which the container's termination message will be written is mounted into the container's filesystem. Message written is intended to be brief final status, such as an assertion failure message. Will be truncated by the node if greater than 4096 bytes. The total message length across all containers will be limited to 12kb. Defaults to /dev/termination-log. Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#termination_message_path DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#termination_message_path}
  */
  readonly terminationMessagePath?: string;
  /**
  * Indicate how the termination message should be populated. File will use the contents of terminationMessagePath to populate the container status message on both success and failure. FallbackToLogsOnError will use the last chunk of container log output if the termination message file is empty and the container exited with an error. The log output is limited to 2048 bytes or 80 lines, whichever is smaller. Defaults to File. Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#termination_message_policy DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#termination_message_policy}
  */
  readonly terminationMessagePolicy?: string;
  /**
  * Whether this container should allocate a TTY for itself, also requires 'stdin' to be true. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#tty DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#tty}
  */
  readonly tty?: boolean | cdktf.IResolvable;
  /**
  * volumeDevices is the list of block devices to be used by the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#volume_devices DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#volume_devices}
  */
  readonly volumeDevices?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersVolumeDevices[] | cdktf.IResolvable;
  /**
  * Pod volumes to mount into the container's filesystem. Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#volume_mounts DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#volume_mounts}
  */
  readonly volumeMounts?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersVolumeMounts[] | cdktf.IResolvable;
  /**
  * Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image. Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#working_dir DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#working_dir}
  */
  readonly workingDir?: string;
}

export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersToTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.args),
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
    env: cdktf.listMapper(dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersEnvToTerraform, false)(struct!.env),
    env_from: cdktf.listMapper(dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersEnvFromToTerraform, false)(struct!.envFrom),
    image: cdktf.stringToTerraform(struct!.image),
    image_pull_policy: cdktf.stringToTerraform(struct!.imagePullPolicy),
    lifecycle: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersLifecycleToTerraform(struct!.lifecycle),
    liveness_probe: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersLivenessProbeToTerraform(struct!.livenessProbe),
    name: cdktf.stringToTerraform(struct!.name),
    ports: cdktf.listMapper(dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersPortsToTerraform, false)(struct!.ports),
    readiness_probe: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersReadinessProbeToTerraform(struct!.readinessProbe),
    resize_policy: cdktf.listMapper(dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersResizePolicyToTerraform, false)(struct!.resizePolicy),
    resources: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersResourcesToTerraform(struct!.resources),
    restart_policy: cdktf.stringToTerraform(struct!.restartPolicy),
    security_context: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersSecurityContextToTerraform(struct!.securityContext),
    startup_probe: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersStartupProbeToTerraform(struct!.startupProbe),
    stdin: cdktf.booleanToTerraform(struct!.stdin),
    stdin_once: cdktf.booleanToTerraform(struct!.stdinOnce),
    termination_message_path: cdktf.stringToTerraform(struct!.terminationMessagePath),
    termination_message_policy: cdktf.stringToTerraform(struct!.terminationMessagePolicy),
    tty: cdktf.booleanToTerraform(struct!.tty),
    volume_devices: cdktf.listMapper(dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersVolumeDevicesToTerraform, false)(struct!.volumeDevices),
    volume_mounts: cdktf.listMapper(dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersVolumeMountsToTerraform, false)(struct!.volumeMounts),
    working_dir: cdktf.stringToTerraform(struct!.workingDir),
  }
}


export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersToHclTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    args: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.args),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    command: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    env: {
      value: cdktf.listMapperHcl(dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersEnvToHclTerraform, false)(struct!.env),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersEnvList",
    },
    env_from: {
      value: cdktf.listMapperHcl(dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersEnvFromToHclTerraform, false)(struct!.envFrom),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersEnvFromList",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_pull_policy: {
      value: cdktf.stringToHclTerraform(struct!.imagePullPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lifecycle: {
      value: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersLifecycleToHclTerraform(struct!.lifecycle),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersLifecycle",
    },
    liveness_probe: {
      value: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersLivenessProbeToHclTerraform(struct!.livenessProbe),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersLivenessProbe",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ports: {
      value: cdktf.listMapperHcl(dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersPortsToHclTerraform, false)(struct!.ports),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersPortsList",
    },
    readiness_probe: {
      value: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersReadinessProbeToHclTerraform(struct!.readinessProbe),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersReadinessProbe",
    },
    resize_policy: {
      value: cdktf.listMapperHcl(dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersResizePolicyToHclTerraform, false)(struct!.resizePolicy),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersResizePolicyList",
    },
    resources: {
      value: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersResources",
    },
    restart_policy: {
      value: cdktf.stringToHclTerraform(struct!.restartPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_context: {
      value: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersSecurityContextToHclTerraform(struct!.securityContext),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersSecurityContext",
    },
    startup_probe: {
      value: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersStartupProbeToHclTerraform(struct!.startupProbe),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersStartupProbe",
    },
    stdin: {
      value: cdktf.booleanToHclTerraform(struct!.stdin),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    stdin_once: {
      value: cdktf.booleanToHclTerraform(struct!.stdinOnce),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    termination_message_path: {
      value: cdktf.stringToHclTerraform(struct!.terminationMessagePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    termination_message_policy: {
      value: cdktf.stringToHclTerraform(struct!.terminationMessagePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tty: {
      value: cdktf.booleanToHclTerraform(struct!.tty),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    volume_devices: {
      value: cdktf.listMapperHcl(dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersVolumeDevicesToHclTerraform, false)(struct!.volumeDevices),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersVolumeDevicesList",
    },
    volume_mounts: {
      value: cdktf.listMapperHcl(dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersVolumeMountsToHclTerraform, false)(struct!.volumeMounts),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersVolumeMountsList",
    },
    working_dir: {
      value: cdktf.stringToHclTerraform(struct!.workingDir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._env?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env?.internalValue;
    }
    if (this._envFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.envFrom = this._envFrom?.internalValue;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._imagePullPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullPolicy = this._imagePullPolicy;
    }
    if (this._lifecycle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycle = this._lifecycle?.internalValue;
    }
    if (this._livenessProbe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.livenessProbe = this._livenessProbe?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._ports?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports?.internalValue;
    }
    if (this._readinessProbe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.readinessProbe = this._readinessProbe?.internalValue;
    }
    if (this._resizePolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resizePolicy = this._resizePolicy?.internalValue;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._restartPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.restartPolicy = this._restartPolicy;
    }
    if (this._securityContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityContext = this._securityContext?.internalValue;
    }
    if (this._startupProbe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.startupProbe = this._startupProbe?.internalValue;
    }
    if (this._stdin !== undefined) {
      hasAnyValues = true;
      internalValueResult.stdin = this._stdin;
    }
    if (this._stdinOnce !== undefined) {
      hasAnyValues = true;
      internalValueResult.stdinOnce = this._stdinOnce;
    }
    if (this._terminationMessagePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminationMessagePath = this._terminationMessagePath;
    }
    if (this._terminationMessagePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminationMessagePolicy = this._terminationMessagePolicy;
    }
    if (this._tty !== undefined) {
      hasAnyValues = true;
      internalValueResult.tty = this._tty;
    }
    if (this._volumeDevices?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeDevices = this._volumeDevices?.internalValue;
    }
    if (this._volumeMounts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeMounts = this._volumeMounts?.internalValue;
    }
    if (this._workingDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.workingDir = this._workingDir;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._args = undefined;
      this._command = undefined;
      this._env.internalValue = undefined;
      this._envFrom.internalValue = undefined;
      this._image = undefined;
      this._imagePullPolicy = undefined;
      this._lifecycle.internalValue = undefined;
      this._livenessProbe.internalValue = undefined;
      this._name = undefined;
      this._ports.internalValue = undefined;
      this._readinessProbe.internalValue = undefined;
      this._resizePolicy.internalValue = undefined;
      this._resources.internalValue = undefined;
      this._restartPolicy = undefined;
      this._securityContext.internalValue = undefined;
      this._startupProbe.internalValue = undefined;
      this._stdin = undefined;
      this._stdinOnce = undefined;
      this._terminationMessagePath = undefined;
      this._terminationMessagePolicy = undefined;
      this._tty = undefined;
      this._volumeDevices.internalValue = undefined;
      this._volumeMounts.internalValue = undefined;
      this._workingDir = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._args = value.args;
      this._command = value.command;
      this._env.internalValue = value.env;
      this._envFrom.internalValue = value.envFrom;
      this._image = value.image;
      this._imagePullPolicy = value.imagePullPolicy;
      this._lifecycle.internalValue = value.lifecycle;
      this._livenessProbe.internalValue = value.livenessProbe;
      this._name = value.name;
      this._ports.internalValue = value.ports;
      this._readinessProbe.internalValue = value.readinessProbe;
      this._resizePolicy.internalValue = value.resizePolicy;
      this._resources.internalValue = value.resources;
      this._restartPolicy = value.restartPolicy;
      this._securityContext.internalValue = value.securityContext;
      this._startupProbe.internalValue = value.startupProbe;
      this._stdin = value.stdin;
      this._stdinOnce = value.stdinOnce;
      this._terminationMessagePath = value.terminationMessagePath;
      this._terminationMessagePolicy = value.terminationMessagePolicy;
      this._tty = value.tty;
      this._volumeDevices.internalValue = value.volumeDevices;
      this._volumeMounts.internalValue = value.volumeMounts;
      this._workingDir = value.workingDir;
    }
  }

  // args - computed: false, optional: true, required: false
  private _args?: string[]; 
  public get args() {
    return this.getListAttribute('args');
  }
  public set args(value: string[]) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // command - computed: false, optional: true, required: false
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // env - computed: false, optional: true, required: false
  private _env = new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersEnvList(this, "env", false);
  public get env() {
    return this._env;
  }
  public putEnv(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersEnv[] | cdktf.IResolvable) {
    this._env.internalValue = value;
  }
  public resetEnv() {
    this._env.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env.internalValue;
  }

  // env_from - computed: false, optional: true, required: false
  private _envFrom = new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersEnvFromList(this, "env_from", false);
  public get envFrom() {
    return this._envFrom;
  }
  public putEnvFrom(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersEnvFrom[] | cdktf.IResolvable) {
    this._envFrom.internalValue = value;
  }
  public resetEnvFrom() {
    this._envFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envFromInput() {
    return this._envFrom.internalValue;
  }

  // image - computed: false, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // image_pull_policy - computed: false, optional: true, required: false
  private _imagePullPolicy?: string; 
  public get imagePullPolicy() {
    return this.getStringAttribute('image_pull_policy');
  }
  public set imagePullPolicy(value: string) {
    this._imagePullPolicy = value;
  }
  public resetImagePullPolicy() {
    this._imagePullPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullPolicyInput() {
    return this._imagePullPolicy;
  }

  // lifecycle - computed: false, optional: true, required: false
  private _lifecycle = new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersLifecycleOutputReference(this, "lifecycle");
  public get lifecycle() {
    return this._lifecycle;
  }
  public putLifecycle(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersLifecycle) {
    this._lifecycle.internalValue = value;
  }
  public resetLifecycle() {
    this._lifecycle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleInput() {
    return this._lifecycle.internalValue;
  }

  // liveness_probe - computed: false, optional: true, required: false
  private _livenessProbe = new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersLivenessProbeOutputReference(this, "liveness_probe");
  public get livenessProbe() {
    return this._livenessProbe;
  }
  public putLivenessProbe(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersLivenessProbe) {
    this._livenessProbe.internalValue = value;
  }
  public resetLivenessProbe() {
    this._livenessProbe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get livenessProbeInput() {
    return this._livenessProbe.internalValue;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // ports - computed: false, optional: true, required: false
  private _ports = new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersPortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }
  public putPorts(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersPorts[] | cdktf.IResolvable) {
    this._ports.internalValue = value;
  }
  public resetPorts() {
    this._ports.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports.internalValue;
  }

  // readiness_probe - computed: false, optional: true, required: false
  private _readinessProbe = new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersReadinessProbeOutputReference(this, "readiness_probe");
  public get readinessProbe() {
    return this._readinessProbe;
  }
  public putReadinessProbe(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersReadinessProbe) {
    this._readinessProbe.internalValue = value;
  }
  public resetReadinessProbe() {
    this._readinessProbe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readinessProbeInput() {
    return this._readinessProbe.internalValue;
  }

  // resize_policy - computed: false, optional: true, required: false
  private _resizePolicy = new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersResizePolicyList(this, "resize_policy", false);
  public get resizePolicy() {
    return this._resizePolicy;
  }
  public putResizePolicy(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersResizePolicy[] | cdktf.IResolvable) {
    this._resizePolicy.internalValue = value;
  }
  public resetResizePolicy() {
    this._resizePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resizePolicyInput() {
    return this._resizePolicy.internalValue;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // restart_policy - computed: false, optional: true, required: false
  private _restartPolicy?: string; 
  public get restartPolicy() {
    return this.getStringAttribute('restart_policy');
  }
  public set restartPolicy(value: string) {
    this._restartPolicy = value;
  }
  public resetRestartPolicy() {
    this._restartPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restartPolicyInput() {
    return this._restartPolicy;
  }

  // security_context - computed: false, optional: true, required: false
  private _securityContext = new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersSecurityContextOutputReference(this, "security_context");
  public get securityContext() {
    return this._securityContext;
  }
  public putSecurityContext(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersSecurityContext) {
    this._securityContext.internalValue = value;
  }
  public resetSecurityContext() {
    this._securityContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityContextInput() {
    return this._securityContext.internalValue;
  }

  // startup_probe - computed: false, optional: true, required: false
  private _startupProbe = new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersStartupProbeOutputReference(this, "startup_probe");
  public get startupProbe() {
    return this._startupProbe;
  }
  public putStartupProbe(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersStartupProbe) {
    this._startupProbe.internalValue = value;
  }
  public resetStartupProbe() {
    this._startupProbe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startupProbeInput() {
    return this._startupProbe.internalValue;
  }

  // stdin - computed: false, optional: true, required: false
  private _stdin?: boolean | cdktf.IResolvable; 
  public get stdin() {
    return this.getBooleanAttribute('stdin');
  }
  public set stdin(value: boolean | cdktf.IResolvable) {
    this._stdin = value;
  }
  public resetStdin() {
    this._stdin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stdinInput() {
    return this._stdin;
  }

  // stdin_once - computed: false, optional: true, required: false
  private _stdinOnce?: boolean | cdktf.IResolvable; 
  public get stdinOnce() {
    return this.getBooleanAttribute('stdin_once');
  }
  public set stdinOnce(value: boolean | cdktf.IResolvable) {
    this._stdinOnce = value;
  }
  public resetStdinOnce() {
    this._stdinOnce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stdinOnceInput() {
    return this._stdinOnce;
  }

  // termination_message_path - computed: false, optional: true, required: false
  private _terminationMessagePath?: string; 
  public get terminationMessagePath() {
    return this.getStringAttribute('termination_message_path');
  }
  public set terminationMessagePath(value: string) {
    this._terminationMessagePath = value;
  }
  public resetTerminationMessagePath() {
    this._terminationMessagePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminationMessagePathInput() {
    return this._terminationMessagePath;
  }

  // termination_message_policy - computed: false, optional: true, required: false
  private _terminationMessagePolicy?: string; 
  public get terminationMessagePolicy() {
    return this.getStringAttribute('termination_message_policy');
  }
  public set terminationMessagePolicy(value: string) {
    this._terminationMessagePolicy = value;
  }
  public resetTerminationMessagePolicy() {
    this._terminationMessagePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminationMessagePolicyInput() {
    return this._terminationMessagePolicy;
  }

  // tty - computed: false, optional: true, required: false
  private _tty?: boolean | cdktf.IResolvable; 
  public get tty() {
    return this.getBooleanAttribute('tty');
  }
  public set tty(value: boolean | cdktf.IResolvable) {
    this._tty = value;
  }
  public resetTty() {
    this._tty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttyInput() {
    return this._tty;
  }

  // volume_devices - computed: false, optional: true, required: false
  private _volumeDevices = new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersVolumeDevicesList(this, "volume_devices", false);
  public get volumeDevices() {
    return this._volumeDevices;
  }
  public putVolumeDevices(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersVolumeDevices[] | cdktf.IResolvable) {
    this._volumeDevices.internalValue = value;
  }
  public resetVolumeDevices() {
    this._volumeDevices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeDevicesInput() {
    return this._volumeDevices.internalValue;
  }

  // volume_mounts - computed: false, optional: true, required: false
  private _volumeMounts = new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersVolumeMountsList(this, "volume_mounts", false);
  public get volumeMounts() {
    return this._volumeMounts;
  }
  public putVolumeMounts(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersVolumeMounts[] | cdktf.IResolvable) {
    this._volumeMounts.internalValue = value;
  }
  public resetVolumeMounts() {
    this._volumeMounts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeMountsInput() {
    return this._volumeMounts.internalValue;
  }

  // working_dir - computed: false, optional: true, required: false
  private _workingDir?: string; 
  public get workingDir() {
    return this.getStringAttribute('working_dir');
  }
  public set workingDir(value: string) {
    this._workingDir = value;
  }
  public resetWorkingDir() {
    this._workingDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workingDirInput() {
    return this._workingDir;
  }
}

export class DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersList extends cdktf.ComplexList {
  public internalValue? : DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainers[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersOutputReference {
    return new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecOs {
  /**
  * Name is the name of the operating system. The currently supported values are linux and windows. Additional value may be defined in future and can be one of: https://github.com/opencontainers/runtime-spec/blob/master/config.md#platform-specific-configuration Clients should expect to handle additional values and treat unrecognized values in this field as os: null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#name DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecOsToTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecOs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecOsToHclTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecOs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecOsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecOs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecOs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecReadinessGates {
  /**
  * ConditionType refers to a condition in the pod's condition list with matching type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#condition_type DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#condition_type}
  */
  readonly conditionType: string;
}

export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecReadinessGatesToTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecReadinessGates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition_type: cdktf.stringToTerraform(struct!.conditionType),
  }
}


export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecReadinessGatesToHclTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecReadinessGates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition_type: {
      value: cdktf.stringToHclTerraform(struct!.conditionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecReadinessGatesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecReadinessGates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionType = this._conditionType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecReadinessGates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditionType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditionType = value.conditionType;
    }
  }

  // condition_type - computed: false, optional: false, required: true
  private _conditionType?: string; 
  public get conditionType() {
    return this.getStringAttribute('condition_type');
  }
  public set conditionType(value: string) {
    this._conditionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionTypeInput() {
    return this._conditionType;
  }
}

export class DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecReadinessGatesList extends cdktf.ComplexList {
  public internalValue? : DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecReadinessGates[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecReadinessGatesOutputReference {
    return new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecReadinessGatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecResourceClaimsSource {
  /**
  * ResourceClaimName is the name of a ResourceClaim object in the same namespace as this pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#resource_claim_name DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#resource_claim_name}
  */
  readonly resourceClaimName?: string;
  /**
  * ResourceClaimTemplateName is the name of a ResourceClaimTemplate object in the same namespace as this pod. The template will be used to create a new ResourceClaim, which will be bound to this pod. When this pod is deleted, the ResourceClaim will also be deleted. The pod name and resource name, along with a generated component, will be used to form a unique name for the ResourceClaim, which will be recorded in pod.status.resourceClaimStatuses. This field is immutable and no changes will be made to the corresponding ResourceClaim by the control plane after creating the ResourceClaim.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#resource_claim_template_name DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#resource_claim_template_name}
  */
  readonly resourceClaimTemplateName?: string;
}

export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecResourceClaimsSourceToTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecResourceClaimsSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_claim_name: cdktf.stringToTerraform(struct!.resourceClaimName),
    resource_claim_template_name: cdktf.stringToTerraform(struct!.resourceClaimTemplateName),
  }
}


export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecResourceClaimsSourceToHclTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecResourceClaimsSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource_claim_name: {
      value: cdktf.stringToHclTerraform(struct!.resourceClaimName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_claim_template_name: {
      value: cdktf.stringToHclTerraform(struct!.resourceClaimTemplateName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecResourceClaimsSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecResourceClaimsSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceClaimName !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceClaimName = this._resourceClaimName;
    }
    if (this._resourceClaimTemplateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceClaimTemplateName = this._resourceClaimTemplateName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecResourceClaimsSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceClaimName = undefined;
      this._resourceClaimTemplateName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceClaimName = value.resourceClaimName;
      this._resourceClaimTemplateName = value.resourceClaimTemplateName;
    }
  }

  // resource_claim_name - computed: false, optional: true, required: false
  private _resourceClaimName?: string; 
  public get resourceClaimName() {
    return this.getStringAttribute('resource_claim_name');
  }
  public set resourceClaimName(value: string) {
    this._resourceClaimName = value;
  }
  public resetResourceClaimName() {
    this._resourceClaimName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceClaimNameInput() {
    return this._resourceClaimName;
  }

  // resource_claim_template_name - computed: false, optional: true, required: false
  private _resourceClaimTemplateName?: string; 
  public get resourceClaimTemplateName() {
    return this.getStringAttribute('resource_claim_template_name');
  }
  public set resourceClaimTemplateName(value: string) {
    this._resourceClaimTemplateName = value;
  }
  public resetResourceClaimTemplateName() {
    this._resourceClaimTemplateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceClaimTemplateNameInput() {
    return this._resourceClaimTemplateName;
  }
}
export interface DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecResourceClaims {
  /**
  * Name uniquely identifies this resource claim inside the pod. This must be a DNS_LABEL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#name DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Source describes where to find the ResourceClaim.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#source DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#source}
  */
  readonly source?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecResourceClaimsSource;
}

export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecResourceClaimsToTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecResourceClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    source: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecResourceClaimsSourceToTerraform(struct!.source),
  }
}


export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecResourceClaimsToHclTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecResourceClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecResourceClaimsSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecResourceClaimsSource",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecResourceClaimsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecResourceClaims | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecResourceClaims | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._source.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._source.internalValue = value.source;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // source - computed: false, optional: true, required: false
  private _source = new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecResourceClaimsSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecResourceClaimsSource) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }
}

export class DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecResourceClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecResourceClaims[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecResourceClaimsOutputReference {
    return new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecResourceClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecSchedulingGates {
  /**
  * Name of the scheduling gate. Each scheduling gate must have a unique name field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#name DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecSchedulingGatesToTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecSchedulingGates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecSchedulingGatesToHclTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecSchedulingGates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecSchedulingGatesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecSchedulingGates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecSchedulingGates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecSchedulingGatesList extends cdktf.ComplexList {
  public internalValue? : DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecSchedulingGates[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecSchedulingGatesOutputReference {
    return new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecSchedulingGatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecSecurityContextSeLinuxOptions {
  /**
  * Level is SELinux level label that applies to the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#level DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#level}
  */
  readonly level?: string;
  /**
  * Role is a SELinux role label that applies to the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#role DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#role}
  */
  readonly role?: string;
  /**
  * Type is a SELinux type label that applies to the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#type DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#type}
  */
  readonly type?: string;
  /**
  * User is a SELinux user label that applies to the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#user DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#user}
  */
  readonly user?: string;
}

export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecSecurityContextSeLinuxOptionsToTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecSecurityContextSeLinuxOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    role: cdktf.stringToTerraform(struct!.role),
    type: cdktf.stringToTerraform(struct!.type),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecSecurityContextSeLinuxOptionsToHclTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecSecurityContextSeLinuxOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecSecurityContextSeLinuxOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecSecurityContextSeLinuxOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecSecurityContextSeLinuxOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
      this._role = undefined;
      this._type = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
      this._role = value.role;
      this._type = value.type;
      this._user = value.user;
    }
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecSecurityContextSeccompProfile {
  /**
  * localhostProfile indicates a profile defined in a file on the node should be used. The profile must be preconfigured on the node to work. Must be a descending path, relative to the kubelet's configured seccomp profile location. Must be set if type is 'Localhost'. Must NOT be set for any other type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#localhost_profile DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#localhost_profile}
  */
  readonly localhostProfile?: string;
  /**
  * type indicates which kind of seccomp profile will be applied. Valid options are: Localhost - a profile defined in a file on the node should be used. RuntimeDefault - the container runtime default profile should be used. Unconfined - no profile should be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#type DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#type}
  */
  readonly type: string;
}

export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecSecurityContextSeccompProfileToTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecSecurityContextSeccompProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    localhost_profile: cdktf.stringToTerraform(struct!.localhostProfile),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecSecurityContextSeccompProfileToHclTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecSecurityContextSeccompProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    localhost_profile: {
      value: cdktf.stringToHclTerraform(struct!.localhostProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecSecurityContextSeccompProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecSecurityContextSeccompProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localhostProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.localhostProfile = this._localhostProfile;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecSecurityContextSeccompProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._localhostProfile = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._localhostProfile = value.localhostProfile;
      this._type = value.type;
    }
  }

  // localhost_profile - computed: false, optional: true, required: false
  private _localhostProfile?: string; 
  public get localhostProfile() {
    return this.getStringAttribute('localhost_profile');
  }
  public set localhostProfile(value: string) {
    this._localhostProfile = value;
  }
  public resetLocalhostProfile() {
    this._localhostProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localhostProfileInput() {
    return this._localhostProfile;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecSecurityContextSysctls {
  /**
  * Name of a property to set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#name DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Value of a property to set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#value DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecSecurityContextSysctlsToTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecSecurityContextSysctls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecSecurityContextSysctlsToHclTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecSecurityContextSysctls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecSecurityContextSysctlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecSecurityContextSysctls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecSecurityContextSysctls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecSecurityContextSysctlsList extends cdktf.ComplexList {
  public internalValue? : DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecSecurityContextSysctls[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecSecurityContextSysctlsOutputReference {
    return new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecSecurityContextSysctlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecSecurityContextWindowsOptions {
  /**
  * GMSACredentialSpec is where the GMSA admission webhook (https://github.com/kubernetes-sigs/windows-gmsa) inlines the contents of the GMSA credential spec named by the GMSACredentialSpecName field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#gmsa_credential_spec DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#gmsa_credential_spec}
  */
  readonly gmsaCredentialSpec?: string;
  /**
  * GMSACredentialSpecName is the name of the GMSA credential spec to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#gmsa_credential_spec_name DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#gmsa_credential_spec_name}
  */
  readonly gmsaCredentialSpecName?: string;
  /**
  * HostProcess determines if a container should be run as a 'Host Process' container. All of a Pod's containers must have the same effective HostProcess value (it is not allowed to have a mix of HostProcess containers and non-HostProcess containers). In addition, if HostProcess is true then HostNetwork must also be set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#host_process DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#host_process}
  */
  readonly hostProcess?: boolean | cdktf.IResolvable;
  /**
  * The UserName in Windows to run the entrypoint of the container process. Defaults to the user specified in image metadata if unspecified. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#run_as_user_name DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#run_as_user_name}
  */
  readonly runAsUserName?: string;
}

export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecSecurityContextWindowsOptionsToTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecSecurityContextWindowsOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gmsa_credential_spec: cdktf.stringToTerraform(struct!.gmsaCredentialSpec),
    gmsa_credential_spec_name: cdktf.stringToTerraform(struct!.gmsaCredentialSpecName),
    host_process: cdktf.booleanToTerraform(struct!.hostProcess),
    run_as_user_name: cdktf.stringToTerraform(struct!.runAsUserName),
  }
}


export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecSecurityContextWindowsOptionsToHclTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecSecurityContextWindowsOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gmsa_credential_spec: {
      value: cdktf.stringToHclTerraform(struct!.gmsaCredentialSpec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gmsa_credential_spec_name: {
      value: cdktf.stringToHclTerraform(struct!.gmsaCredentialSpecName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_process: {
      value: cdktf.booleanToHclTerraform(struct!.hostProcess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    run_as_user_name: {
      value: cdktf.stringToHclTerraform(struct!.runAsUserName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecSecurityContextWindowsOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecSecurityContextWindowsOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gmsaCredentialSpec !== undefined) {
      hasAnyValues = true;
      internalValueResult.gmsaCredentialSpec = this._gmsaCredentialSpec;
    }
    if (this._gmsaCredentialSpecName !== undefined) {
      hasAnyValues = true;
      internalValueResult.gmsaCredentialSpecName = this._gmsaCredentialSpecName;
    }
    if (this._hostProcess !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostProcess = this._hostProcess;
    }
    if (this._runAsUserName !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsUserName = this._runAsUserName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecSecurityContextWindowsOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gmsaCredentialSpec = undefined;
      this._gmsaCredentialSpecName = undefined;
      this._hostProcess = undefined;
      this._runAsUserName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gmsaCredentialSpec = value.gmsaCredentialSpec;
      this._gmsaCredentialSpecName = value.gmsaCredentialSpecName;
      this._hostProcess = value.hostProcess;
      this._runAsUserName = value.runAsUserName;
    }
  }

  // gmsa_credential_spec - computed: false, optional: true, required: false
  private _gmsaCredentialSpec?: string; 
  public get gmsaCredentialSpec() {
    return this.getStringAttribute('gmsa_credential_spec');
  }
  public set gmsaCredentialSpec(value: string) {
    this._gmsaCredentialSpec = value;
  }
  public resetGmsaCredentialSpec() {
    this._gmsaCredentialSpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gmsaCredentialSpecInput() {
    return this._gmsaCredentialSpec;
  }

  // gmsa_credential_spec_name - computed: false, optional: true, required: false
  private _gmsaCredentialSpecName?: string; 
  public get gmsaCredentialSpecName() {
    return this.getStringAttribute('gmsa_credential_spec_name');
  }
  public set gmsaCredentialSpecName(value: string) {
    this._gmsaCredentialSpecName = value;
  }
  public resetGmsaCredentialSpecName() {
    this._gmsaCredentialSpecName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gmsaCredentialSpecNameInput() {
    return this._gmsaCredentialSpecName;
  }

  // host_process - computed: false, optional: true, required: false
  private _hostProcess?: boolean | cdktf.IResolvable; 
  public get hostProcess() {
    return this.getBooleanAttribute('host_process');
  }
  public set hostProcess(value: boolean | cdktf.IResolvable) {
    this._hostProcess = value;
  }
  public resetHostProcess() {
    this._hostProcess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostProcessInput() {
    return this._hostProcess;
  }

  // run_as_user_name - computed: false, optional: true, required: false
  private _runAsUserName?: string; 
  public get runAsUserName() {
    return this.getStringAttribute('run_as_user_name');
  }
  public set runAsUserName(value: string) {
    this._runAsUserName = value;
  }
  public resetRunAsUserName() {
    this._runAsUserName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsUserNameInput() {
    return this._runAsUserName;
  }
}
export interface DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecSecurityContext {
  /**
  * A special supplemental group that applies to all containers in a pod. Some volume types allow the Kubelet to change the ownership of that volume to be owned by the pod: 1. The owning GID will be the FSGroup 2. The setgid bit is set (new files created in the volume will be owned by FSGroup) 3. The permission bits are OR'd with rw-rw---- If unset, the Kubelet will not modify the ownership and permissions of any volume. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#fs_group DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#fs_group}
  */
  readonly fsGroup?: number;
  /**
  * fsGroupChangePolicy defines behavior of changing ownership and permission of the volume before being exposed inside Pod. This field will only apply to volume types which support fsGroup based ownership(and permissions). It will have no effect on ephemeral volume types such as: secret, configmaps and emptydir. Valid values are 'OnRootMismatch' and 'Always'. If not specified, 'Always' is used. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#fs_group_change_policy DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#fs_group_change_policy}
  */
  readonly fsGroupChangePolicy?: string;
  /**
  * The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in SecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#run_as_group DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#run_as_group}
  */
  readonly runAsGroup?: number;
  /**
  * Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in SecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#run_as_non_root DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#run_as_non_root}
  */
  readonly runAsNonRoot?: boolean | cdktf.IResolvable;
  /**
  * The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in SecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#run_as_user DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#run_as_user}
  */
  readonly runAsUser?: number;
  /**
  * The SELinux context to be applied to all containers. If unspecified, the container runtime will allocate a random SELinux context for each container. May also be set in SecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#se_linux_options DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#se_linux_options}
  */
  readonly seLinuxOptions?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecSecurityContextSeLinuxOptions;
  /**
  * The seccomp options to use by the containers in this pod. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#seccomp_profile DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#seccomp_profile}
  */
  readonly seccompProfile?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecSecurityContextSeccompProfile;
  /**
  * A list of groups applied to the first process run in each container, in addition to the container's primary GID, the fsGroup (if specified), and group memberships defined in the container image for the uid of the container process. If unspecified, no additional groups are added to any container. Note that group memberships defined in the container image for the uid of the container process are still effective, even if they are not included in this list. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#supplemental_groups DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#supplemental_groups}
  */
  readonly supplementalGroups?: string[];
  /**
  * Sysctls hold a list of namespaced sysctls used for the pod. Pods with unsupported sysctls (by the container runtime) might fail to launch. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#sysctls DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#sysctls}
  */
  readonly sysctls?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecSecurityContextSysctls[] | cdktf.IResolvable;
  /**
  * The Windows specific settings applied to all containers. If unspecified, the options within a container's SecurityContext will be used. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is linux.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#windows_options DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#windows_options}
  */
  readonly windowsOptions?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecSecurityContextWindowsOptions;
}

export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecSecurityContextToTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecSecurityContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_group: cdktf.numberToTerraform(struct!.fsGroup),
    fs_group_change_policy: cdktf.stringToTerraform(struct!.fsGroupChangePolicy),
    run_as_group: cdktf.numberToTerraform(struct!.runAsGroup),
    run_as_non_root: cdktf.booleanToTerraform(struct!.runAsNonRoot),
    run_as_user: cdktf.numberToTerraform(struct!.runAsUser),
    se_linux_options: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecSecurityContextSeLinuxOptionsToTerraform(struct!.seLinuxOptions),
    seccomp_profile: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecSecurityContextSeccompProfileToTerraform(struct!.seccompProfile),
    supplemental_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.supplementalGroups),
    sysctls: cdktf.listMapper(dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecSecurityContextSysctlsToTerraform, false)(struct!.sysctls),
    windows_options: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecSecurityContextWindowsOptionsToTerraform(struct!.windowsOptions),
  }
}


export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecSecurityContextToHclTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecSecurityContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fs_group: {
      value: cdktf.numberToHclTerraform(struct!.fsGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fs_group_change_policy: {
      value: cdktf.stringToHclTerraform(struct!.fsGroupChangePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    run_as_group: {
      value: cdktf.numberToHclTerraform(struct!.runAsGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    run_as_non_root: {
      value: cdktf.booleanToHclTerraform(struct!.runAsNonRoot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    run_as_user: {
      value: cdktf.numberToHclTerraform(struct!.runAsUser),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    se_linux_options: {
      value: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecSecurityContextSeLinuxOptionsToHclTerraform(struct!.seLinuxOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecSecurityContextSeLinuxOptions",
    },
    seccomp_profile: {
      value: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecSecurityContextSeccompProfileToHclTerraform(struct!.seccompProfile),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecSecurityContextSeccompProfile",
    },
    supplemental_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.supplementalGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    sysctls: {
      value: cdktf.listMapperHcl(dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecSecurityContextSysctlsToHclTerraform, false)(struct!.sysctls),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecSecurityContextSysctlsList",
    },
    windows_options: {
      value: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecSecurityContextWindowsOptionsToHclTerraform(struct!.windowsOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecSecurityContextWindowsOptions",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecSecurityContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecSecurityContext | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fsGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsGroup = this._fsGroup;
    }
    if (this._fsGroupChangePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsGroupChangePolicy = this._fsGroupChangePolicy;
    }
    if (this._runAsGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsGroup = this._runAsGroup;
    }
    if (this._runAsNonRoot !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsNonRoot = this._runAsNonRoot;
    }
    if (this._runAsUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsUser = this._runAsUser;
    }
    if (this._seLinuxOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seLinuxOptions = this._seLinuxOptions?.internalValue;
    }
    if (this._seccompProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seccompProfile = this._seccompProfile?.internalValue;
    }
    if (this._supplementalGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.supplementalGroups = this._supplementalGroups;
    }
    if (this._sysctls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sysctls = this._sysctls?.internalValue;
    }
    if (this._windowsOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowsOptions = this._windowsOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecSecurityContext | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fsGroup = undefined;
      this._fsGroupChangePolicy = undefined;
      this._runAsGroup = undefined;
      this._runAsNonRoot = undefined;
      this._runAsUser = undefined;
      this._seLinuxOptions.internalValue = undefined;
      this._seccompProfile.internalValue = undefined;
      this._supplementalGroups = undefined;
      this._sysctls.internalValue = undefined;
      this._windowsOptions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fsGroup = value.fsGroup;
      this._fsGroupChangePolicy = value.fsGroupChangePolicy;
      this._runAsGroup = value.runAsGroup;
      this._runAsNonRoot = value.runAsNonRoot;
      this._runAsUser = value.runAsUser;
      this._seLinuxOptions.internalValue = value.seLinuxOptions;
      this._seccompProfile.internalValue = value.seccompProfile;
      this._supplementalGroups = value.supplementalGroups;
      this._sysctls.internalValue = value.sysctls;
      this._windowsOptions.internalValue = value.windowsOptions;
    }
  }

  // fs_group - computed: false, optional: true, required: false
  private _fsGroup?: number; 
  public get fsGroup() {
    return this.getNumberAttribute('fs_group');
  }
  public set fsGroup(value: number) {
    this._fsGroup = value;
  }
  public resetFsGroup() {
    this._fsGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsGroupInput() {
    return this._fsGroup;
  }

  // fs_group_change_policy - computed: false, optional: true, required: false
  private _fsGroupChangePolicy?: string; 
  public get fsGroupChangePolicy() {
    return this.getStringAttribute('fs_group_change_policy');
  }
  public set fsGroupChangePolicy(value: string) {
    this._fsGroupChangePolicy = value;
  }
  public resetFsGroupChangePolicy() {
    this._fsGroupChangePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsGroupChangePolicyInput() {
    return this._fsGroupChangePolicy;
  }

  // run_as_group - computed: false, optional: true, required: false
  private _runAsGroup?: number; 
  public get runAsGroup() {
    return this.getNumberAttribute('run_as_group');
  }
  public set runAsGroup(value: number) {
    this._runAsGroup = value;
  }
  public resetRunAsGroup() {
    this._runAsGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsGroupInput() {
    return this._runAsGroup;
  }

  // run_as_non_root - computed: false, optional: true, required: false
  private _runAsNonRoot?: boolean | cdktf.IResolvable; 
  public get runAsNonRoot() {
    return this.getBooleanAttribute('run_as_non_root');
  }
  public set runAsNonRoot(value: boolean | cdktf.IResolvable) {
    this._runAsNonRoot = value;
  }
  public resetRunAsNonRoot() {
    this._runAsNonRoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsNonRootInput() {
    return this._runAsNonRoot;
  }

  // run_as_user - computed: false, optional: true, required: false
  private _runAsUser?: number; 
  public get runAsUser() {
    return this.getNumberAttribute('run_as_user');
  }
  public set runAsUser(value: number) {
    this._runAsUser = value;
  }
  public resetRunAsUser() {
    this._runAsUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsUserInput() {
    return this._runAsUser;
  }

  // se_linux_options - computed: false, optional: true, required: false
  private _seLinuxOptions = new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecSecurityContextSeLinuxOptionsOutputReference(this, "se_linux_options");
  public get seLinuxOptions() {
    return this._seLinuxOptions;
  }
  public putSeLinuxOptions(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecSecurityContextSeLinuxOptions) {
    this._seLinuxOptions.internalValue = value;
  }
  public resetSeLinuxOptions() {
    this._seLinuxOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seLinuxOptionsInput() {
    return this._seLinuxOptions.internalValue;
  }

  // seccomp_profile - computed: false, optional: true, required: false
  private _seccompProfile = new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecSecurityContextSeccompProfileOutputReference(this, "seccomp_profile");
  public get seccompProfile() {
    return this._seccompProfile;
  }
  public putSeccompProfile(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecSecurityContextSeccompProfile) {
    this._seccompProfile.internalValue = value;
  }
  public resetSeccompProfile() {
    this._seccompProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seccompProfileInput() {
    return this._seccompProfile.internalValue;
  }

  // supplemental_groups - computed: false, optional: true, required: false
  private _supplementalGroups?: string[]; 
  public get supplementalGroups() {
    return this.getListAttribute('supplemental_groups');
  }
  public set supplementalGroups(value: string[]) {
    this._supplementalGroups = value;
  }
  public resetSupplementalGroups() {
    this._supplementalGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supplementalGroupsInput() {
    return this._supplementalGroups;
  }

  // sysctls - computed: false, optional: true, required: false
  private _sysctls = new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecSecurityContextSysctlsList(this, "sysctls", false);
  public get sysctls() {
    return this._sysctls;
  }
  public putSysctls(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecSecurityContextSysctls[] | cdktf.IResolvable) {
    this._sysctls.internalValue = value;
  }
  public resetSysctls() {
    this._sysctls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sysctlsInput() {
    return this._sysctls.internalValue;
  }

  // windows_options - computed: false, optional: true, required: false
  private _windowsOptions = new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecSecurityContextWindowsOptionsOutputReference(this, "windows_options");
  public get windowsOptions() {
    return this._windowsOptions;
  }
  public putWindowsOptions(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecSecurityContextWindowsOptions) {
    this._windowsOptions.internalValue = value;
  }
  public resetWindowsOptions() {
    this._windowsOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsOptionsInput() {
    return this._windowsOptions.internalValue;
  }
}
export interface DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecTolerations {
  /**
  * Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#effect DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#effect}
  */
  readonly effect?: string;
  /**
  * Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#key DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#operator DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#operator}
  */
  readonly operator?: string;
  /**
  * TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#toleration_seconds DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#toleration_seconds}
  */
  readonly tolerationSeconds?: number;
  /**
  * Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#value DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecTolerationsToTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    toleration_seconds: cdktf.numberToTerraform(struct!.tolerationSeconds),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecTolerationsToHclTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    toleration_seconds: {
      value: cdktf.numberToHclTerraform(struct!.tolerationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecTolerationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecTolerations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._tolerationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerationSeconds = this._tolerationSeconds;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecTolerations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._tolerationSeconds = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._key = value.key;
      this._operator = value.operator;
      this._tolerationSeconds = value.tolerationSeconds;
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // toleration_seconds - computed: false, optional: true, required: false
  private _tolerationSeconds?: number; 
  public get tolerationSeconds() {
    return this.getNumberAttribute('toleration_seconds');
  }
  public set tolerationSeconds(value: number) {
    this._tolerationSeconds = value;
  }
  public resetTolerationSeconds() {
    this._tolerationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationSecondsInput() {
    return this._tolerationSeconds;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecTolerationsList extends cdktf.ComplexList {
  public internalValue? : DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecTolerations[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecTolerationsOutputReference {
    return new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraintsLabelSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#key DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#operator DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#values DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraintsLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraintsLabelSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraintsLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraintsLabelSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraintsLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraintsLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraintsLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraintsLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraintsLabelSelectorMatchExpressions[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraintsLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraintsLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraintsLabelSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#match_expressions DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraintsLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#match_labels DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraintsLabelSelectorToTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraintsLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraintsLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraintsLabelSelectorToHclTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraintsLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraintsLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraintsLabelSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraintsLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraintsLabelSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraintsLabelSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraintsLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraintsLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraints {
  /**
  * LabelSelector is used to find matching pods. Pods that match this label selector are counted to determine the number of pods in their corresponding topology domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#label_selector DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraintsLabelSelector;
  /**
  * MatchLabelKeys is a set of pod label keys to select the pods over which spreading will be calculated. The keys are used to lookup values from the incoming pod labels, those key-value labels are ANDed with labelSelector to select the group of existing pods over which spreading will be calculated for the incoming pod. The same key is forbidden to exist in both MatchLabelKeys and LabelSelector. MatchLabelKeys cannot be set when LabelSelector isn't set. Keys that don't exist in the incoming pod labels will be ignored. A null or empty list means only match against labelSelector. This is a beta field and requires the MatchLabelKeysInPodTopologySpread feature gate to be enabled (enabled by default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#match_label_keys DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#match_label_keys}
  */
  readonly matchLabelKeys?: string[];
  /**
  * MaxSkew describes the degree to which pods may be unevenly distributed. When 'whenUnsatisfiable=DoNotSchedule', it is the maximum permitted difference between the number of matching pods in the target topology and the global minimum. The global minimum is the minimum number of matching pods in an eligible domain or zero if the number of eligible domains is less than MinDomains. For example, in a 3-zone cluster, MaxSkew is set to 1, and pods with the same labelSelector spread as 2/2/1: In this case, the global minimum is 1. | zone1 | zone2 | zone3 | | P P | P P | P | - if MaxSkew is 1, incoming pod can only be scheduled to zone3 to become 2/2/2; scheduling it onto zone1(zone2) would make the ActualSkew(3-1) on zone1(zone2) violate MaxSkew(1). - if MaxSkew is 2, incoming pod can be scheduled onto any zone. When 'whenUnsatisfiable=ScheduleAnyway', it is used to give higher precedence to topologies that satisfy it. It's a required field. Default value is 1 and 0 is not allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#max_skew DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#max_skew}
  */
  readonly maxSkew: number;
  /**
  * MinDomains indicates a minimum number of eligible domains. When the number of eligible domains with matching topology keys is less than minDomains, Pod Topology Spread treats 'global minimum' as 0, and then the calculation of Skew is performed. And when the number of eligible domains with matching topology keys equals or greater than minDomains, this value has no effect on scheduling. As a result, when the number of eligible domains is less than minDomains, scheduler won't schedule more than maxSkew Pods to those domains. If value is nil, the constraint behaves as if MinDomains is equal to 1. Valid values are integers greater than 0. When value is not nil, WhenUnsatisfiable must be DoNotSchedule. For example, in a 3-zone cluster, MaxSkew is set to 2, MinDomains is set to 5 and pods with the same labelSelector spread as 2/2/2: | zone1 | zone2 | zone3 | | P P | P P | P P | The number of domains is less than 5(MinDomains), so 'global minimum' is treated as 0. In this situation, new pod with the same labelSelector cannot be scheduled, because computed skew will be 3(3 - 0) if new Pod is scheduled to any of the three zones, it will violate MaxSkew. This is a beta field and requires the MinDomainsInPodTopologySpread feature gate to be enabled (enabled by default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#min_domains DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#min_domains}
  */
  readonly minDomains?: number;
  /**
  * NodeAffinityPolicy indicates how we will treat Pod's nodeAffinity/nodeSelector when calculating pod topology spread skew. Options are: - Honor: only nodes matching nodeAffinity/nodeSelector are included in the calculations. - Ignore: nodeAffinity/nodeSelector are ignored. All nodes are included in the calculations. If this value is nil, the behavior is equivalent to the Honor policy. This is a beta-level feature default enabled by the NodeInclusionPolicyInPodTopologySpread feature flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#node_affinity_policy DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#node_affinity_policy}
  */
  readonly nodeAffinityPolicy?: string;
  /**
  * NodeTaintsPolicy indicates how we will treat node taints when calculating pod topology spread skew. Options are: - Honor: nodes without taints, along with tainted nodes for which the incoming pod has a toleration, are included. - Ignore: node taints are ignored. All nodes are included. If this value is nil, the behavior is equivalent to the Ignore policy. This is a beta-level feature default enabled by the NodeInclusionPolicyInPodTopologySpread feature flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#node_taints_policy DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#node_taints_policy}
  */
  readonly nodeTaintsPolicy?: string;
  /**
  * TopologyKey is the key of node labels. Nodes that have a label with this key and identical values are considered to be in the same topology. We consider each <key, value> as a 'bucket', and try to put balanced number of pods into each bucket. We define a domain as a particular instance of a topology. Also, we define an eligible domain as a domain whose nodes meet the requirements of nodeAffinityPolicy and nodeTaintsPolicy. e.g. If TopologyKey is 'kubernetes.io/hostname', each Node is a domain of that topology. And, if TopologyKey is 'topology.kubernetes.io/zone', each zone is a domain of that topology. It's a required field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#topology_key DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#topology_key}
  */
  readonly topologyKey: string;
  /**
  * WhenUnsatisfiable indicates how to deal with a pod if it doesn't satisfy the spread constraint. - DoNotSchedule (default) tells the scheduler not to schedule it. - ScheduleAnyway tells the scheduler to schedule the pod in any location, but giving higher precedence to topologies that would help reduce the skew. A constraint is considered 'Unsatisfiable' for an incoming pod if and only if every possible node assignment for that pod would violate 'MaxSkew' on some topology. For example, in a 3-zone cluster, MaxSkew is set to 1, and pods with the same labelSelector spread as 3/1/1: | zone1 | zone2 | zone3 | | P P P | P | P | If WhenUnsatisfiable is set to DoNotSchedule, incoming pod can only be scheduled to zone2(zone3) to become 3/2/1(3/1/2) as ActualSkew(2-1) on zone2(zone3) satisfies MaxSkew(1). In other words, the cluster can still be imbalanced, but scheduler won't make it *more* imbalanced. It's a required field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#when_unsatisfiable DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#when_unsatisfiable}
  */
  readonly whenUnsatisfiable: string;
}

export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraintsToTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_selector: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraintsLabelSelectorToTerraform(struct!.labelSelector),
    match_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchLabelKeys),
    max_skew: cdktf.numberToTerraform(struct!.maxSkew),
    min_domains: cdktf.numberToTerraform(struct!.minDomains),
    node_affinity_policy: cdktf.stringToTerraform(struct!.nodeAffinityPolicy),
    node_taints_policy: cdktf.stringToTerraform(struct!.nodeTaintsPolicy),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
    when_unsatisfiable: cdktf.stringToTerraform(struct!.whenUnsatisfiable),
  }
}


export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraintsToHclTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_selector: {
      value: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraintsLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraintsLabelSelector",
    },
    match_label_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchLabelKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    max_skew: {
      value: cdktf.numberToHclTerraform(struct!.maxSkew),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_domains: {
      value: cdktf.numberToHclTerraform(struct!.minDomains),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node_affinity_policy: {
      value: cdktf.stringToHclTerraform(struct!.nodeAffinityPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_taints_policy: {
      value: cdktf.stringToHclTerraform(struct!.nodeTaintsPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topology_key: {
      value: cdktf.stringToHclTerraform(struct!.topologyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    when_unsatisfiable: {
      value: cdktf.stringToHclTerraform(struct!.whenUnsatisfiable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraintsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._matchLabelKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabelKeys = this._matchLabelKeys;
    }
    if (this._maxSkew !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSkew = this._maxSkew;
    }
    if (this._minDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.minDomains = this._minDomains;
    }
    if (this._nodeAffinityPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAffinityPolicy = this._nodeAffinityPolicy;
    }
    if (this._nodeTaintsPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeTaintsPolicy = this._nodeTaintsPolicy;
    }
    if (this._topologyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyKey = this._topologyKey;
    }
    if (this._whenUnsatisfiable !== undefined) {
      hasAnyValues = true;
      internalValueResult.whenUnsatisfiable = this._whenUnsatisfiable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = undefined;
      this._matchLabelKeys = undefined;
      this._maxSkew = undefined;
      this._minDomains = undefined;
      this._nodeAffinityPolicy = undefined;
      this._nodeTaintsPolicy = undefined;
      this._topologyKey = undefined;
      this._whenUnsatisfiable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = value.labelSelector;
      this._matchLabelKeys = value.matchLabelKeys;
      this._maxSkew = value.maxSkew;
      this._minDomains = value.minDomains;
      this._nodeAffinityPolicy = value.nodeAffinityPolicy;
      this._nodeTaintsPolicy = value.nodeTaintsPolicy;
      this._topologyKey = value.topologyKey;
      this._whenUnsatisfiable = value.whenUnsatisfiable;
    }
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraintsLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraintsLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }

  // match_label_keys - computed: false, optional: true, required: false
  private _matchLabelKeys?: string[]; 
  public get matchLabelKeys() {
    return this.getListAttribute('match_label_keys');
  }
  public set matchLabelKeys(value: string[]) {
    this._matchLabelKeys = value;
  }
  public resetMatchLabelKeys() {
    this._matchLabelKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelKeysInput() {
    return this._matchLabelKeys;
  }

  // max_skew - computed: false, optional: false, required: true
  private _maxSkew?: number; 
  public get maxSkew() {
    return this.getNumberAttribute('max_skew');
  }
  public set maxSkew(value: number) {
    this._maxSkew = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSkewInput() {
    return this._maxSkew;
  }

  // min_domains - computed: false, optional: true, required: false
  private _minDomains?: number; 
  public get minDomains() {
    return this.getNumberAttribute('min_domains');
  }
  public set minDomains(value: number) {
    this._minDomains = value;
  }
  public resetMinDomains() {
    this._minDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minDomainsInput() {
    return this._minDomains;
  }

  // node_affinity_policy - computed: false, optional: true, required: false
  private _nodeAffinityPolicy?: string; 
  public get nodeAffinityPolicy() {
    return this.getStringAttribute('node_affinity_policy');
  }
  public set nodeAffinityPolicy(value: string) {
    this._nodeAffinityPolicy = value;
  }
  public resetNodeAffinityPolicy() {
    this._nodeAffinityPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAffinityPolicyInput() {
    return this._nodeAffinityPolicy;
  }

  // node_taints_policy - computed: false, optional: true, required: false
  private _nodeTaintsPolicy?: string; 
  public get nodeTaintsPolicy() {
    return this.getStringAttribute('node_taints_policy');
  }
  public set nodeTaintsPolicy(value: string) {
    this._nodeTaintsPolicy = value;
  }
  public resetNodeTaintsPolicy() {
    this._nodeTaintsPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTaintsPolicyInput() {
    return this._nodeTaintsPolicy;
  }

  // topology_key - computed: false, optional: false, required: true
  private _topologyKey?: string; 
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
  public set topologyKey(value: string) {
    this._topologyKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyKeyInput() {
    return this._topologyKey;
  }

  // when_unsatisfiable - computed: false, optional: false, required: true
  private _whenUnsatisfiable?: string; 
  public get whenUnsatisfiable() {
    return this.getStringAttribute('when_unsatisfiable');
  }
  public set whenUnsatisfiable(value: string) {
    this._whenUnsatisfiable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get whenUnsatisfiableInput() {
    return this._whenUnsatisfiable;
  }
}

export class DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraintsList extends cdktf.ComplexList {
  public internalValue? : DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraints[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraintsOutputReference {
    return new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesAwsElasticBlockStore {
  /**
  * fsType is the filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore TODO: how do we prevent errors in the filesystem from compromising the machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#fs_type DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * partition is the partition in the volume that you want to mount. If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as '1'. Similarly, the volume partition for /dev/sda is '0' (or you can leave the property empty).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#partition DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#partition}
  */
  readonly partition?: number;
  /**
  * readOnly value true will force the readOnly setting in VolumeMounts. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#read_only DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * volumeID is unique ID of the persistent disk resource in AWS (Amazon EBS volume). More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#volume_id DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#volume_id}
  */
  readonly volumeId: string;
}

export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesAwsElasticBlockStoreToTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesAwsElasticBlockStore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    partition: cdktf.numberToTerraform(struct!.partition),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    volume_id: cdktf.stringToTerraform(struct!.volumeId),
  }
}


export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesAwsElasticBlockStoreToHclTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesAwsElasticBlockStore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fs_type: {
      value: cdktf.stringToHclTerraform(struct!.fsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    partition: {
      value: cdktf.numberToHclTerraform(struct!.partition),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    volume_id: {
      value: cdktf.stringToHclTerraform(struct!.volumeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesAwsElasticBlockStoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesAwsElasticBlockStore | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._partition !== undefined) {
      hasAnyValues = true;
      internalValueResult.partition = this._partition;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._volumeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeId = this._volumeId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesAwsElasticBlockStore | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fsType = undefined;
      this._partition = undefined;
      this._readOnly = undefined;
      this._volumeId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fsType = value.fsType;
      this._partition = value.partition;
      this._readOnly = value.readOnly;
      this._volumeId = value.volumeId;
    }
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
  }

  // partition - computed: false, optional: true, required: false
  private _partition?: number; 
  public get partition() {
    return this.getNumberAttribute('partition');
  }
  public set partition(value: number) {
    this._partition = value;
  }
  public resetPartition() {
    this._partition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionInput() {
    return this._partition;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // volume_id - computed: false, optional: false, required: true
  private _volumeId?: string; 
  public get volumeId() {
    return this.getStringAttribute('volume_id');
  }
  public set volumeId(value: string) {
    this._volumeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeIdInput() {
    return this._volumeId;
  }
}
export interface DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesAzureDisk {
  /**
  * cachingMode is the Host Caching mode: None, Read Only, Read Write.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#caching_mode DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#caching_mode}
  */
  readonly cachingMode?: string;
  /**
  * diskName is the Name of the data disk in the blob storage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#disk_name DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#disk_name}
  */
  readonly diskName: string;
  /**
  * diskURI is the URI of data disk in the blob storage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#disk_uri DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#disk_uri}
  */
  readonly diskUri: string;
  /**
  * fsType is Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#fs_type DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * kind expected values are Shared: multiple blob disks per storage account Dedicated: single blob disk per storage account Managed: azure managed data disk (only in managed availability set). defaults to shared
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#kind DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * readOnly Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#read_only DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
}

export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesAzureDiskToTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesAzureDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    caching_mode: cdktf.stringToTerraform(struct!.cachingMode),
    disk_name: cdktf.stringToTerraform(struct!.diskName),
    disk_uri: cdktf.stringToTerraform(struct!.diskUri),
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    kind: cdktf.stringToTerraform(struct!.kind),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
  }
}


export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesAzureDiskToHclTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesAzureDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    caching_mode: {
      value: cdktf.stringToHclTerraform(struct!.cachingMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_name: {
      value: cdktf.stringToHclTerraform(struct!.diskName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_uri: {
      value: cdktf.stringToHclTerraform(struct!.diskUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fs_type: {
      value: cdktf.stringToHclTerraform(struct!.fsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesAzureDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesAzureDisk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cachingMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.cachingMode = this._cachingMode;
    }
    if (this._diskName !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskName = this._diskName;
    }
    if (this._diskUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskUri = this._diskUri;
    }
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesAzureDisk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cachingMode = undefined;
      this._diskName = undefined;
      this._diskUri = undefined;
      this._fsType = undefined;
      this._kind = undefined;
      this._readOnly = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cachingMode = value.cachingMode;
      this._diskName = value.diskName;
      this._diskUri = value.diskUri;
      this._fsType = value.fsType;
      this._kind = value.kind;
      this._readOnly = value.readOnly;
    }
  }

  // caching_mode - computed: false, optional: true, required: false
  private _cachingMode?: string; 
  public get cachingMode() {
    return this.getStringAttribute('caching_mode');
  }
  public set cachingMode(value: string) {
    this._cachingMode = value;
  }
  public resetCachingMode() {
    this._cachingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cachingModeInput() {
    return this._cachingMode;
  }

  // disk_name - computed: false, optional: false, required: true
  private _diskName?: string; 
  public get diskName() {
    return this.getStringAttribute('disk_name');
  }
  public set diskName(value: string) {
    this._diskName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskNameInput() {
    return this._diskName;
  }

  // disk_uri - computed: false, optional: false, required: true
  private _diskUri?: string; 
  public get diskUri() {
    return this.getStringAttribute('disk_uri');
  }
  public set diskUri(value: string) {
    this._diskUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskUriInput() {
    return this._diskUri;
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }
}
export interface DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesAzureFile {
  /**
  * readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#read_only DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * secretName is the name of secret that contains Azure Storage Account Name and Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#secret_name DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#secret_name}
  */
  readonly secretName: string;
  /**
  * shareName is the azure share Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#share_name DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#share_name}
  */
  readonly shareName: string;
}

export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesAzureFileToTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesAzureFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
    share_name: cdktf.stringToTerraform(struct!.shareName),
  }
}


export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesAzureFileToHclTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesAzureFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    secret_name: {
      value: cdktf.stringToHclTerraform(struct!.secretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    share_name: {
      value: cdktf.stringToHclTerraform(struct!.shareName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesAzureFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesAzureFile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    if (this._shareName !== undefined) {
      hasAnyValues = true;
      internalValueResult.shareName = this._shareName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesAzureFile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._readOnly = undefined;
      this._secretName = undefined;
      this._shareName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._readOnly = value.readOnly;
      this._secretName = value.secretName;
      this._shareName = value.shareName;
    }
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // secret_name - computed: false, optional: false, required: true
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }

  // share_name - computed: false, optional: false, required: true
  private _shareName?: string; 
  public get shareName() {
    return this.getStringAttribute('share_name');
  }
  public set shareName(value: string) {
    this._shareName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shareNameInput() {
    return this._shareName;
  }
}
export interface DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesCephfsSecretRef {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#name DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesCephfsSecretRefToTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesCephfsSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesCephfsSecretRefToHclTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesCephfsSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesCephfsSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesCephfsSecretRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesCephfsSecretRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesCephfs {
  /**
  * monitors is Required: Monitors is a collection of Ceph monitors More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#monitors DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#monitors}
  */
  readonly monitors: string[];
  /**
  * path is Optional: Used as the mounted root, rather than the full Ceph tree, default is /
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#path DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#path}
  */
  readonly path?: string;
  /**
  * readOnly is Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#read_only DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * secretFile is Optional: SecretFile is the path to key ring for User, default is /etc/ceph/user.secret More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#secret_file DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#secret_file}
  */
  readonly secretFile?: string;
  /**
  * secretRef is Optional: SecretRef is reference to the authentication secret for User, default is empty. More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#secret_ref DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesCephfsSecretRef;
  /**
  * user is optional: User is the rados user name, default is admin More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#user DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#user}
  */
  readonly user?: string;
}

export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesCephfsToTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesCephfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    monitors: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.monitors),
    path: cdktf.stringToTerraform(struct!.path),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_file: cdktf.stringToTerraform(struct!.secretFile),
    secret_ref: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesCephfsSecretRefToTerraform(struct!.secretRef),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesCephfsToHclTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesCephfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    monitors: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.monitors),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    secret_file: {
      value: cdktf.stringToHclTerraform(struct!.secretFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_ref: {
      value: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesCephfsSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesCephfsSecretRef",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesCephfsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesCephfs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._monitors !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitors = this._monitors;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._secretFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretFile = this._secretFile;
    }
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesCephfs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._monitors = undefined;
      this._path = undefined;
      this._readOnly = undefined;
      this._secretFile = undefined;
      this._secretRef.internalValue = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._monitors = value.monitors;
      this._path = value.path;
      this._readOnly = value.readOnly;
      this._secretFile = value.secretFile;
      this._secretRef.internalValue = value.secretRef;
      this._user = value.user;
    }
  }

  // monitors - computed: false, optional: false, required: true
  private _monitors?: string[]; 
  public get monitors() {
    return this.getListAttribute('monitors');
  }
  public set monitors(value: string[]) {
    this._monitors = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorsInput() {
    return this._monitors;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // secret_file - computed: false, optional: true, required: false
  private _secretFile?: string; 
  public get secretFile() {
    return this.getStringAttribute('secret_file');
  }
  public set secretFile(value: string) {
    this._secretFile = value;
  }
  public resetSecretFile() {
    this._secretFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretFileInput() {
    return this._secretFile;
  }

  // secret_ref - computed: false, optional: true, required: false
  private _secretRef = new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesCephfsSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesCephfsSecretRef) {
    this._secretRef.internalValue = value;
  }
  public resetSecretRef() {
    this._secretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesCinderSecretRef {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#name DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesCinderSecretRefToTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesCinderSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesCinderSecretRefToHclTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesCinderSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesCinderSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesCinderSecretRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesCinderSecretRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesCinder {
  /**
  * fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Examples: 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified. More info: https://examples.k8s.io/mysql-cinder-pd/README.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#fs_type DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: https://examples.k8s.io/mysql-cinder-pd/README.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#read_only DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * secretRef is optional: points to a secret object containing parameters used to connect to OpenStack.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#secret_ref DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesCinderSecretRef;
  /**
  * volumeID used to identify the volume in cinder. More info: https://examples.k8s.io/mysql-cinder-pd/README.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#volume_id DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#volume_id}
  */
  readonly volumeId: string;
}

export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesCinderToTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesCinder | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_ref: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesCinderSecretRefToTerraform(struct!.secretRef),
    volume_id: cdktf.stringToTerraform(struct!.volumeId),
  }
}


export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesCinderToHclTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesCinder | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fs_type: {
      value: cdktf.stringToHclTerraform(struct!.fsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    secret_ref: {
      value: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesCinderSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesCinderSecretRef",
    },
    volume_id: {
      value: cdktf.stringToHclTerraform(struct!.volumeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesCinderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesCinder | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    if (this._volumeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeId = this._volumeId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesCinder | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fsType = undefined;
      this._readOnly = undefined;
      this._secretRef.internalValue = undefined;
      this._volumeId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fsType = value.fsType;
      this._readOnly = value.readOnly;
      this._secretRef.internalValue = value.secretRef;
      this._volumeId = value.volumeId;
    }
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // secret_ref - computed: false, optional: true, required: false
  private _secretRef = new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesCinderSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesCinderSecretRef) {
    this._secretRef.internalValue = value;
  }
  public resetSecretRef() {
    this._secretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }

  // volume_id - computed: false, optional: false, required: true
  private _volumeId?: string; 
  public get volumeId() {
    return this.getStringAttribute('volume_id');
  }
  public set volumeId(value: string) {
    this._volumeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeIdInput() {
    return this._volumeId;
  }
}
export interface DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesConfigMapItems {
  /**
  * key is the key to project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#key DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * mode is Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#mode DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#mode}
  */
  readonly mode?: number;
  /**
  * path is the relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#path DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesConfigMapItemsToTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesConfigMapItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    mode: cdktf.numberToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesConfigMapItemsToHclTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesConfigMapItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.numberToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesConfigMapItemsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesConfigMapItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesConfigMapItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._mode = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._mode = value.mode;
      this._path = value.path;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: number; 
  public get mode() {
    return this.getNumberAttribute('mode');
  }
  public set mode(value: number) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

export class DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesConfigMapItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesConfigMapItems[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesConfigMapItemsOutputReference {
    return new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesConfigMapItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesConfigMap {
  /**
  * defaultMode is optional: mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#default_mode DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#default_mode}
  */
  readonly defaultMode?: number;
  /**
  * items if unspecified, each key-value pair in the Data field of the referenced ConfigMap will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the ConfigMap, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#items DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#items}
  */
  readonly items?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesConfigMapItems[] | cdktf.IResolvable;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#name DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * optional specify whether the ConfigMap or its keys must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#optional DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesConfigMapToTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_mode: cdktf.numberToTerraform(struct!.defaultMode),
    items: cdktf.listMapper(dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesConfigMapItemsToTerraform, false)(struct!.items),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesConfigMapToHclTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_mode: {
      value: cdktf.numberToHclTerraform(struct!.defaultMode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    items: {
      value: cdktf.listMapperHcl(dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesConfigMapItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesConfigMapItemsList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesConfigMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesConfigMap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultMode = this._defaultMode;
    }
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesConfigMap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultMode = undefined;
      this._items.internalValue = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultMode = value.defaultMode;
      this._items.internalValue = value.items;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // default_mode - computed: false, optional: true, required: false
  private _defaultMode?: number; 
  public get defaultMode() {
    return this.getNumberAttribute('default_mode');
  }
  public set defaultMode(value: number) {
    this._defaultMode = value;
  }
  public resetDefaultMode() {
    this._defaultMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultModeInput() {
    return this._defaultMode;
  }

  // items - computed: false, optional: true, required: false
  private _items = new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesConfigMapItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesConfigMapItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesCsiNodePublishSecretRef {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#name DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesCsiNodePublishSecretRefToTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesCsiNodePublishSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesCsiNodePublishSecretRefToHclTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesCsiNodePublishSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesCsiNodePublishSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesCsiNodePublishSecretRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesCsiNodePublishSecretRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesCsi {
  /**
  * driver is the name of the CSI driver that handles this volume. Consult with your admin for the correct name as registered in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#driver DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#driver}
  */
  readonly driver: string;
  /**
  * fsType to mount. Ex. 'ext4', 'xfs', 'ntfs'. If not provided, the empty value is passed to the associated CSI driver which will determine the default filesystem to apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#fs_type DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * nodePublishSecretRef is a reference to the secret object containing sensitive information to pass to the CSI driver to complete the CSI NodePublishVolume and NodeUnpublishVolume calls. This field is optional, and may be empty if no secret is required. If the secret object contains more than one secret, all secret references are passed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#node_publish_secret_ref DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#node_publish_secret_ref}
  */
  readonly nodePublishSecretRef?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesCsiNodePublishSecretRef;
  /**
  * readOnly specifies a read-only configuration for the volume. Defaults to false (read/write).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#read_only DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * volumeAttributes stores driver-specific properties that are passed to the CSI driver. Consult your driver's documentation for supported values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#volume_attributes DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#volume_attributes}
  */
  readonly volumeAttributes?: { [key: string]: string };
}

export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesCsiToTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesCsi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    driver: cdktf.stringToTerraform(struct!.driver),
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    node_publish_secret_ref: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesCsiNodePublishSecretRefToTerraform(struct!.nodePublishSecretRef),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    volume_attributes: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.volumeAttributes),
  }
}


export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesCsiToHclTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesCsi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    driver: {
      value: cdktf.stringToHclTerraform(struct!.driver),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fs_type: {
      value: cdktf.stringToHclTerraform(struct!.fsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_publish_secret_ref: {
      value: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesCsiNodePublishSecretRefToHclTerraform(struct!.nodePublishSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesCsiNodePublishSecretRef",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    volume_attributes: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.volumeAttributes),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesCsiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesCsi | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._driver !== undefined) {
      hasAnyValues = true;
      internalValueResult.driver = this._driver;
    }
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._nodePublishSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodePublishSecretRef = this._nodePublishSecretRef?.internalValue;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._volumeAttributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeAttributes = this._volumeAttributes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesCsi | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._driver = undefined;
      this._fsType = undefined;
      this._nodePublishSecretRef.internalValue = undefined;
      this._readOnly = undefined;
      this._volumeAttributes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._driver = value.driver;
      this._fsType = value.fsType;
      this._nodePublishSecretRef.internalValue = value.nodePublishSecretRef;
      this._readOnly = value.readOnly;
      this._volumeAttributes = value.volumeAttributes;
    }
  }

  // driver - computed: false, optional: false, required: true
  private _driver?: string; 
  public get driver() {
    return this.getStringAttribute('driver');
  }
  public set driver(value: string) {
    this._driver = value;
  }
  // Temporarily expose input value. Use with caution.
  public get driverInput() {
    return this._driver;
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
  }

  // node_publish_secret_ref - computed: false, optional: true, required: false
  private _nodePublishSecretRef = new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesCsiNodePublishSecretRefOutputReference(this, "node_publish_secret_ref");
  public get nodePublishSecretRef() {
    return this._nodePublishSecretRef;
  }
  public putNodePublishSecretRef(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesCsiNodePublishSecretRef) {
    this._nodePublishSecretRef.internalValue = value;
  }
  public resetNodePublishSecretRef() {
    this._nodePublishSecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePublishSecretRefInput() {
    return this._nodePublishSecretRef.internalValue;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // volume_attributes - computed: false, optional: true, required: false
  private _volumeAttributes?: { [key: string]: string }; 
  public get volumeAttributes() {
    return this.getStringMapAttribute('volume_attributes');
  }
  public set volumeAttributes(value: { [key: string]: string }) {
    this._volumeAttributes = value;
  }
  public resetVolumeAttributes() {
    this._volumeAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeAttributesInput() {
    return this._volumeAttributes;
  }
}
export interface DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesDownwardApiItemsFieldRef {
  /**
  * Version of the schema the FieldPath is written in terms of, defaults to 'v1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#api_version DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Path of the field to select in the specified API version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#field_path DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#field_path}
  */
  readonly fieldPath: string;
}

export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesDownwardApiItemsFieldRefToTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesDownwardApiItemsFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}


export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesDownwardApiItemsFieldRefToHclTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesDownwardApiItemsFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_version: {
      value: cdktf.stringToHclTerraform(struct!.apiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_path: {
      value: cdktf.stringToHclTerraform(struct!.fieldPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesDownwardApiItemsFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesDownwardApiItemsFieldRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._fieldPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldPath = this._fieldPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesDownwardApiItemsFieldRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._fieldPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._fieldPath = value.fieldPath;
    }
  }

  // api_version - computed: false, optional: true, required: false
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // field_path - computed: false, optional: false, required: true
  private _fieldPath?: string; 
  public get fieldPath() {
    return this.getStringAttribute('field_path');
  }
  public set fieldPath(value: string) {
    this._fieldPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldPathInput() {
    return this._fieldPath;
  }
}
export interface DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesDownwardApiItemsResourceFieldRef {
  /**
  * Container name: required for volumes, optional for env vars
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#container_name DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#container_name}
  */
  readonly containerName?: string;
  /**
  * Specifies the output format of the exposed resources, defaults to '1'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#divisor DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#divisor}
  */
  readonly divisor?: string;
  /**
  * Required: resource to select
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#resource DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#resource}
  */
  readonly resource: string;
}

export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesDownwardApiItemsResourceFieldRefToTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesDownwardApiItemsResourceFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    divisor: cdktf.stringToTerraform(struct!.divisor),
    resource: cdktf.stringToTerraform(struct!.resource),
  }
}


export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesDownwardApiItemsResourceFieldRefToHclTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesDownwardApiItemsResourceFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_name: {
      value: cdktf.stringToHclTerraform(struct!.containerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    divisor: {
      value: cdktf.stringToHclTerraform(struct!.divisor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource: {
      value: cdktf.stringToHclTerraform(struct!.resource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesDownwardApiItemsResourceFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesDownwardApiItemsResourceFieldRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerName = this._containerName;
    }
    if (this._divisor !== undefined) {
      hasAnyValues = true;
      internalValueResult.divisor = this._divisor;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesDownwardApiItemsResourceFieldRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerName = undefined;
      this._divisor = undefined;
      this._resource = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerName = value.containerName;
      this._divisor = value.divisor;
      this._resource = value.resource;
    }
  }

  // container_name - computed: false, optional: true, required: false
  private _containerName?: string; 
  public get containerName() {
    return this.getStringAttribute('container_name');
  }
  public set containerName(value: string) {
    this._containerName = value;
  }
  public resetContainerName() {
    this._containerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNameInput() {
    return this._containerName;
  }

  // divisor - computed: false, optional: true, required: false
  private _divisor?: string; 
  public get divisor() {
    return this.getStringAttribute('divisor');
  }
  public set divisor(value: string) {
    this._divisor = value;
  }
  public resetDivisor() {
    this._divisor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get divisorInput() {
    return this._divisor;
  }

  // resource - computed: false, optional: false, required: true
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }
}
export interface DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesDownwardApiItems {
  /**
  * Required: Selects a field of the pod: only annotations, labels, name and namespace are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#field_ref DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#field_ref}
  */
  readonly fieldRef?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesDownwardApiItemsFieldRef;
  /**
  * Optional: mode bits used to set permissions on this file, must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#mode DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#mode}
  */
  readonly mode?: number;
  /**
  * Required: Path is the relative path name of the file to be created. Must not be absolute or contain the '..' path. Must be utf-8 encoded. The first item of the relative path must not start with '..'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#path DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#path}
  */
  readonly path: string;
  /**
  * Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, requests.cpu and requests.memory) are currently supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#resource_field_ref DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#resource_field_ref}
  */
  readonly resourceFieldRef?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesDownwardApiItemsResourceFieldRef;
}

export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesDownwardApiItemsToTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesDownwardApiItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_ref: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesDownwardApiItemsFieldRefToTerraform(struct!.fieldRef),
    mode: cdktf.numberToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
    resource_field_ref: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesDownwardApiItemsResourceFieldRefToTerraform(struct!.resourceFieldRef),
  }
}


export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesDownwardApiItemsToHclTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesDownwardApiItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_ref: {
      value: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesDownwardApiItemsFieldRefToHclTerraform(struct!.fieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesDownwardApiItemsFieldRef",
    },
    mode: {
      value: cdktf.numberToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_field_ref: {
      value: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesDownwardApiItemsResourceFieldRefToHclTerraform(struct!.resourceFieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesDownwardApiItemsResourceFieldRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesDownwardApiItemsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesDownwardApiItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldRef = this._fieldRef?.internalValue;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._resourceFieldRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceFieldRef = this._resourceFieldRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesDownwardApiItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldRef.internalValue = undefined;
      this._mode = undefined;
      this._path = undefined;
      this._resourceFieldRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldRef.internalValue = value.fieldRef;
      this._mode = value.mode;
      this._path = value.path;
      this._resourceFieldRef.internalValue = value.resourceFieldRef;
    }
  }

  // field_ref - computed: false, optional: true, required: false
  private _fieldRef = new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesDownwardApiItemsFieldRefOutputReference(this, "field_ref");
  public get fieldRef() {
    return this._fieldRef;
  }
  public putFieldRef(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesDownwardApiItemsFieldRef) {
    this._fieldRef.internalValue = value;
  }
  public resetFieldRef() {
    this._fieldRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldRefInput() {
    return this._fieldRef.internalValue;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: number; 
  public get mode() {
    return this.getNumberAttribute('mode');
  }
  public set mode(value: number) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // resource_field_ref - computed: false, optional: true, required: false
  private _resourceFieldRef = new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesDownwardApiItemsResourceFieldRefOutputReference(this, "resource_field_ref");
  public get resourceFieldRef() {
    return this._resourceFieldRef;
  }
  public putResourceFieldRef(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesDownwardApiItemsResourceFieldRef) {
    this._resourceFieldRef.internalValue = value;
  }
  public resetResourceFieldRef() {
    this._resourceFieldRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceFieldRefInput() {
    return this._resourceFieldRef.internalValue;
  }
}

export class DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesDownwardApiItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesDownwardApiItems[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesDownwardApiItemsOutputReference {
    return new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesDownwardApiItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesDownwardApi {
  /**
  * Optional: mode bits to use on created files by default. Must be a Optional: mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#default_mode DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#default_mode}
  */
  readonly defaultMode?: number;
  /**
  * Items is a list of downward API volume file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#items DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#items}
  */
  readonly items?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesDownwardApiItems[] | cdktf.IResolvable;
}

export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesDownwardApiToTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesDownwardApi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_mode: cdktf.numberToTerraform(struct!.defaultMode),
    items: cdktf.listMapper(dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesDownwardApiItemsToTerraform, false)(struct!.items),
  }
}


export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesDownwardApiToHclTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesDownwardApi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_mode: {
      value: cdktf.numberToHclTerraform(struct!.defaultMode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    items: {
      value: cdktf.listMapperHcl(dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesDownwardApiItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesDownwardApiItemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesDownwardApiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesDownwardApi | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultMode = this._defaultMode;
    }
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesDownwardApi | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultMode = undefined;
      this._items.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultMode = value.defaultMode;
      this._items.internalValue = value.items;
    }
  }

  // default_mode - computed: false, optional: true, required: false
  private _defaultMode?: number; 
  public get defaultMode() {
    return this.getNumberAttribute('default_mode');
  }
  public set defaultMode(value: number) {
    this._defaultMode = value;
  }
  public resetDefaultMode() {
    this._defaultMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultModeInput() {
    return this._defaultMode;
  }

  // items - computed: false, optional: true, required: false
  private _items = new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesDownwardApiItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesDownwardApiItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }
}
export interface DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEmptyDir {
  /**
  * medium represents what type of storage medium should back this directory. The default is '' which means to use the node's default medium. Must be an empty string (default) or Memory. More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#medium DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#medium}
  */
  readonly medium?: string;
  /**
  * sizeLimit is the total amount of local storage required for this EmptyDir volume. The size limit is also applicable for memory medium. The maximum usage on memory medium EmptyDir would be the minimum value between the SizeLimit specified here and the sum of memory limits of all containers in a pod. The default is nil which means that the limit is undefined. More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#size_limit DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#size_limit}
  */
  readonly sizeLimit?: string;
}

export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEmptyDirToTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEmptyDir | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    medium: cdktf.stringToTerraform(struct!.medium),
    size_limit: cdktf.stringToTerraform(struct!.sizeLimit),
  }
}


export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEmptyDirToHclTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEmptyDir | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    medium: {
      value: cdktf.stringToHclTerraform(struct!.medium),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size_limit: {
      value: cdktf.stringToHclTerraform(struct!.sizeLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEmptyDirOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEmptyDir | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._medium !== undefined) {
      hasAnyValues = true;
      internalValueResult.medium = this._medium;
    }
    if (this._sizeLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeLimit = this._sizeLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEmptyDir | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._medium = undefined;
      this._sizeLimit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._medium = value.medium;
      this._sizeLimit = value.sizeLimit;
    }
  }

  // medium - computed: false, optional: true, required: false
  private _medium?: string; 
  public get medium() {
    return this.getStringAttribute('medium');
  }
  public set medium(value: string) {
    this._medium = value;
  }
  public resetMedium() {
    this._medium = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediumInput() {
    return this._medium;
  }

  // size_limit - computed: false, optional: true, required: false
  private _sizeLimit?: string; 
  public get sizeLimit() {
    return this.getStringAttribute('size_limit');
  }
  public set sizeLimit(value: string) {
    this._sizeLimit = value;
  }
  public resetSizeLimit() {
    this._sizeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeLimitInput() {
    return this._sizeLimit;
  }
}
export interface DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#annotations DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#finalizers DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#finalizers}
  */
  readonly finalizers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#labels DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#name DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#namespace DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateMetadataToTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    finalizers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.finalizers),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateMetadataToHclTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.annotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    finalizers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.finalizers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._finalizers !== undefined) {
      hasAnyValues = true;
      internalValueResult.finalizers = this._finalizers;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._finalizers = undefined;
      this._labels = undefined;
      this._name = undefined;
      this._namespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._finalizers = value.finalizers;
      this._labels = value.labels;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // finalizers - computed: false, optional: true, required: false
  private _finalizers?: string[]; 
  public get finalizers() {
    return this.getListAttribute('finalizers');
  }
  public set finalizers(value: string[]) {
    this._finalizers = value;
  }
  public resetFinalizers() {
    this._finalizers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get finalizersInput() {
    return this._finalizers;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecDataSource {
  /**
  * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#api_group DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#api_group}
  */
  readonly apiGroup?: string;
  /**
  * Kind is the type of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#kind DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name is the name of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#name DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecDataSourceToTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecDataSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_group: cdktf.stringToTerraform(struct!.apiGroup),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecDataSourceToHclTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecDataSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_group: {
      value: cdktf.stringToHclTerraform(struct!.apiGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecDataSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecDataSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiGroup = this._apiGroup;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecDataSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiGroup = undefined;
      this._kind = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiGroup = value.apiGroup;
      this._kind = value.kind;
      this._name = value.name;
    }
  }

  // api_group - computed: false, optional: true, required: false
  private _apiGroup?: string; 
  public get apiGroup() {
    return this.getStringAttribute('api_group');
  }
  public set apiGroup(value: string) {
    this._apiGroup = value;
  }
  public resetApiGroup() {
    this._apiGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGroupInput() {
    return this._apiGroup;
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecDataSourceRef {
  /**
  * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#api_group DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#api_group}
  */
  readonly apiGroup?: string;
  /**
  * Kind is the type of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#kind DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name is the name of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#name DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace is the namespace of resource being referenced Note that when a namespace is specified, a gateway.networking.k8s.io/ReferenceGrant object is required in the referent namespace to allow that namespace's owner to accept the reference. See the ReferenceGrant documentation for details. (Alpha) This field requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#namespace DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecDataSourceRefToTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecDataSourceRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_group: cdktf.stringToTerraform(struct!.apiGroup),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecDataSourceRefToHclTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecDataSourceRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_group: {
      value: cdktf.stringToHclTerraform(struct!.apiGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecDataSourceRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecDataSourceRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiGroup = this._apiGroup;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecDataSourceRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiGroup = undefined;
      this._kind = undefined;
      this._name = undefined;
      this._namespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiGroup = value.apiGroup;
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // api_group - computed: false, optional: true, required: false
  private _apiGroup?: string; 
  public get apiGroup() {
    return this.getStringAttribute('api_group');
  }
  public set apiGroup(value: string) {
    this._apiGroup = value;
  }
  public resetApiGroup() {
    this._apiGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGroupInput() {
    return this._apiGroup;
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecResourcesClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#name DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecResourcesClaimsToTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecResourcesClaimsToHclTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecResourcesClaimsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecResourcesClaims | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecResourcesClaims | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecResourcesClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecResourcesClaims[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecResourcesClaimsOutputReference {
    return new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecResourcesClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecResources {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#claims DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#claims}
  */
  readonly claims?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecResourcesClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#limits DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#requests DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecResourcesToTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecResourcesClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecResourcesToHclTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecResourcesClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecResourcesClaimsList",
    },
    limits: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.limits),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    requests: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.requests),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claims?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.claims = this._claims?.internalValue;
    }
    if (this._limits !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits;
    }
    if (this._requests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._claims.internalValue = undefined;
      this._limits = undefined;
      this._requests = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._claims.internalValue = value.claims;
      this._limits = value.limits;
      this._requests = value.requests;
    }
  }

  // claims - computed: false, optional: true, required: false
  private _claims = new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecResourcesClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecResourcesClaims[] | cdktf.IResolvable) {
    this._claims.internalValue = value;
  }
  public resetClaims() {
    this._claims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimsInput() {
    return this._claims.internalValue;
  }

  // limits - computed: false, optional: true, required: false
  private _limits?: { [key: string]: string }; 
  public get limits() {
    return this.getStringMapAttribute('limits');
  }
  public set limits(value: { [key: string]: string }) {
    this._limits = value;
  }
  public resetLimits() {
    this._limits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits;
  }

  // requests - computed: false, optional: true, required: false
  private _requests?: { [key: string]: string }; 
  public get requests() {
    return this.getStringMapAttribute('requests');
  }
  public set requests(value: { [key: string]: string }) {
    this._requests = value;
  }
  public resetRequests() {
    this._requests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests;
  }
}
export interface DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#key DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#operator DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#values DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsToTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsToHclTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsOutputReference {
    return new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#match_expressions DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#match_labels DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecSelectorToTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecSelectorToHclTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpec {
  /**
  * accessModes contains the desired access modes the volume should have. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#access_modes DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#access_modes}
  */
  readonly accessModes?: string[];
  /**
  * dataSource field can be used to specify either: * An existing VolumeSnapshot object (snapshot.storage.k8s.io/VolumeSnapshot) * An existing PVC (PersistentVolumeClaim) If the provisioner or an external controller can support the specified data source, it will create a new volume based on the contents of the specified data source. When the AnyVolumeDataSource feature gate is enabled, dataSource contents will be copied to dataSourceRef, and dataSourceRef contents will be copied to dataSource when dataSourceRef.namespace is not specified. If the namespace is specified, then dataSourceRef will not be copied to dataSource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#data_source DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#data_source}
  */
  readonly dataSource?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecDataSource;
  /**
  * dataSourceRef specifies the object from which to populate the volume with data, if a non-empty volume is desired. This may be any object from a non-empty API group (non core object) or a PersistentVolumeClaim object. When this field is specified, volume binding will only succeed if the type of the specified object matches some installed volume populator or dynamic provisioner. This field will replace the functionality of the dataSource field and as such if both fields are non-empty, they must have the same value. For backwards compatibility, when namespace isn't specified in dataSourceRef, both fields (dataSource and dataSourceRef) will be set to the same value automatically if one of them is empty and the other is non-empty. When namespace is specified in dataSourceRef, dataSource isn't set to the same value and must be empty. There are three important differences between dataSource and dataSourceRef: * While dataSource only allows two specific types of objects, dataSourceRef allows any non-core object, as well as PersistentVolumeClaim objects. * While dataSource ignores disallowed values (dropping them), dataSourceRef preserves all values, and generates an error if a disallowed value is specified. * While dataSource only allows local objects, dataSourceRef allows objects in any namespaces. (Beta) Using this field requires the AnyVolumeDataSource feature gate to be enabled. (Alpha) Using the namespace field of dataSourceRef requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#data_source_ref DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#data_source_ref}
  */
  readonly dataSourceRef?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecDataSourceRef;
  /**
  * resources represents the minimum resources the volume should have. If RecoverVolumeExpansionFailure feature is enabled users are allowed to specify resource requirements that are lower than previous value but must still be higher than capacity recorded in the status field of the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#resources DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecResources;
  /**
  * selector is a label query over volumes to consider for binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#selector DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#selector}
  */
  readonly selector?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecSelector;
  /**
  * storageClassName is the name of the StorageClass required by the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#storage_class_name DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#storage_class_name}
  */
  readonly storageClassName?: string;
  /**
  * volumeMode defines what type of volume is required by the claim. Value of Filesystem is implied when not included in claim spec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#volume_mode DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#volume_mode}
  */
  readonly volumeMode?: string;
  /**
  * volumeName is the binding reference to the PersistentVolume backing this claim.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#volume_name DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#volume_name}
  */
  readonly volumeName?: string;
}

export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecToTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_modes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accessModes),
    data_source: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecDataSourceToTerraform(struct!.dataSource),
    data_source_ref: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecDataSourceRefToTerraform(struct!.dataSourceRef),
    resources: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecResourcesToTerraform(struct!.resources),
    selector: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecSelectorToTerraform(struct!.selector),
    storage_class_name: cdktf.stringToTerraform(struct!.storageClassName),
    volume_mode: cdktf.stringToTerraform(struct!.volumeMode),
    volume_name: cdktf.stringToTerraform(struct!.volumeName),
  }
}


export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecToHclTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_modes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.accessModes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    data_source: {
      value: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecDataSourceToHclTerraform(struct!.dataSource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecDataSource",
    },
    data_source_ref: {
      value: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecDataSourceRefToHclTerraform(struct!.dataSourceRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecDataSourceRef",
    },
    resources: {
      value: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecResources",
    },
    selector: {
      value: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecSelector",
    },
    storage_class_name: {
      value: cdktf.stringToHclTerraform(struct!.storageClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_mode: {
      value: cdktf.stringToHclTerraform(struct!.volumeMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_name: {
      value: cdktf.stringToHclTerraform(struct!.volumeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessModes !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessModes = this._accessModes;
    }
    if (this._dataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSource = this._dataSource?.internalValue;
    }
    if (this._dataSourceRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSourceRef = this._dataSourceRef?.internalValue;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
    }
    if (this._storageClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClassName = this._storageClassName;
    }
    if (this._volumeMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeMode = this._volumeMode;
    }
    if (this._volumeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeName = this._volumeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessModes = undefined;
      this._dataSource.internalValue = undefined;
      this._dataSourceRef.internalValue = undefined;
      this._resources.internalValue = undefined;
      this._selector.internalValue = undefined;
      this._storageClassName = undefined;
      this._volumeMode = undefined;
      this._volumeName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessModes = value.accessModes;
      this._dataSource.internalValue = value.dataSource;
      this._dataSourceRef.internalValue = value.dataSourceRef;
      this._resources.internalValue = value.resources;
      this._selector.internalValue = value.selector;
      this._storageClassName = value.storageClassName;
      this._volumeMode = value.volumeMode;
      this._volumeName = value.volumeName;
    }
  }

  // access_modes - computed: false, optional: true, required: false
  private _accessModes?: string[]; 
  public get accessModes() {
    return this.getListAttribute('access_modes');
  }
  public set accessModes(value: string[]) {
    this._accessModes = value;
  }
  public resetAccessModes() {
    this._accessModes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessModesInput() {
    return this._accessModes;
  }

  // data_source - computed: false, optional: true, required: false
  private _dataSource = new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecDataSourceOutputReference(this, "data_source");
  public get dataSource() {
    return this._dataSource;
  }
  public putDataSource(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecDataSource) {
    this._dataSource.internalValue = value;
  }
  public resetDataSource() {
    this._dataSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceInput() {
    return this._dataSource.internalValue;
  }

  // data_source_ref - computed: false, optional: true, required: false
  private _dataSourceRef = new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecDataSourceRefOutputReference(this, "data_source_ref");
  public get dataSourceRef() {
    return this._dataSourceRef;
  }
  public putDataSourceRef(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecDataSourceRef) {
    this._dataSourceRef.internalValue = value;
  }
  public resetDataSourceRef() {
    this._dataSourceRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceRefInput() {
    return this._dataSourceRef.internalValue;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // selector - computed: false, optional: true, required: false
  private _selector = new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecSelector) {
    this._selector.internalValue = value;
  }
  public resetSelector() {
    this._selector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector.internalValue;
  }

  // storage_class_name - computed: false, optional: true, required: false
  private _storageClassName?: string; 
  public get storageClassName() {
    return this.getStringAttribute('storage_class_name');
  }
  public set storageClassName(value: string) {
    this._storageClassName = value;
  }
  public resetStorageClassName() {
    this._storageClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassNameInput() {
    return this._storageClassName;
  }

  // volume_mode - computed: false, optional: true, required: false
  private _volumeMode?: string; 
  public get volumeMode() {
    return this.getStringAttribute('volume_mode');
  }
  public set volumeMode(value: string) {
    this._volumeMode = value;
  }
  public resetVolumeMode() {
    this._volumeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeModeInput() {
    return this._volumeMode;
  }

  // volume_name - computed: false, optional: true, required: false
  private _volumeName?: string; 
  public get volumeName() {
    return this.getStringAttribute('volume_name');
  }
  public set volumeName(value: string) {
    this._volumeName = value;
  }
  public resetVolumeName() {
    this._volumeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeNameInput() {
    return this._volumeName;
  }
}
export interface DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplate {
  /**
  * May contain labels and annotations that will be copied into the PVC when creating it. No other fields are allowed and will be rejected during validation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#metadata DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#metadata}
  */
  readonly metadata?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateMetadata;
  /**
  * The specification for the PersistentVolumeClaim. The entire content is copied unchanged into the PVC that gets created from this template. The same fields as in a PersistentVolumeClaim are also valid here.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#spec DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#spec}
  */
  readonly spec: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpec;
}

export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateToTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateMetadataToTerraform(struct!.metadata),
    spec: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecToTerraform(struct!.spec),
  }
}


export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateToHclTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata: {
      value: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateMetadata",
    },
    spec: {
      value: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpec",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._spec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metadata.internalValue = undefined;
      this._spec.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metadata.internalValue = value.metadata;
      this._spec.internalValue = value.spec;
    }
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateSpec) {
    this._spec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }
}
export interface DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeral {
  /**
  * Will be used to create a stand-alone PVC to provision the volume. The pod in which this EphemeralVolumeSource is embedded will be the owner of the PVC, i.e. the PVC will be deleted together with the pod. The name of the PVC will be '<pod name>-<volume name>' where '<volume name>' is the name from the 'PodSpec.Volumes' array entry. Pod validation will reject the pod if the concatenated name is not valid for a PVC (for example, too long). An existing PVC with that name that is not owned by the pod will *not* be used for the pod to avoid using an unrelated volume by mistake. Starting the pod is then blocked until the unrelated PVC is removed. If such a pre-created PVC is meant to be used by the pod, the PVC has to updated with an owner reference to the pod once the pod exists. Normally this should not be necessary, but it may be useful when manually reconstructing a broken cluster. This field is read-only and no changes will be made by Kubernetes to the PVC after it has been created. Required, must not be nil.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#volume_claim_template DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#volume_claim_template}
  */
  readonly volumeClaimTemplate?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplate;
}

export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralToTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeral | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    volume_claim_template: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateToTerraform(struct!.volumeClaimTemplate),
  }
}


export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralToHclTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeral | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    volume_claim_template: {
      value: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateToHclTerraform(struct!.volumeClaimTemplate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplate",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeral | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._volumeClaimTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeClaimTemplate = this._volumeClaimTemplate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeral | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._volumeClaimTemplate.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._volumeClaimTemplate.internalValue = value.volumeClaimTemplate;
    }
  }

  // volume_claim_template - computed: false, optional: true, required: false
  private _volumeClaimTemplate = new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplateOutputReference(this, "volume_claim_template");
  public get volumeClaimTemplate() {
    return this._volumeClaimTemplate;
  }
  public putVolumeClaimTemplate(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralVolumeClaimTemplate) {
    this._volumeClaimTemplate.internalValue = value;
  }
  public resetVolumeClaimTemplate() {
    this._volumeClaimTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeClaimTemplateInput() {
    return this._volumeClaimTemplate.internalValue;
  }
}
export interface DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesFc {
  /**
  * fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified. TODO: how do we prevent errors in the filesystem from compromising the machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#fs_type DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * lun is Optional: FC target lun number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#lun DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#lun}
  */
  readonly lun?: number;
  /**
  * readOnly is Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#read_only DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * targetWWNs is Optional: FC target worldwide names (WWNs)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#target_ww_ns DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#target_ww_ns}
  */
  readonly targetWwNs?: string[];
  /**
  * wwids Optional: FC volume world wide identifiers (wwids) Either wwids or combination of targetWWNs and lun must be set, but not both simultaneously.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#wwids DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#wwids}
  */
  readonly wwids?: string[];
}

export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesFcToTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesFc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    lun: cdktf.numberToTerraform(struct!.lun),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    target_ww_ns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.targetWwNs),
    wwids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.wwids),
  }
}


export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesFcToHclTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesFc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fs_type: {
      value: cdktf.stringToHclTerraform(struct!.fsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lun: {
      value: cdktf.numberToHclTerraform(struct!.lun),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    target_ww_ns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.targetWwNs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    wwids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.wwids),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesFcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesFc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._lun !== undefined) {
      hasAnyValues = true;
      internalValueResult.lun = this._lun;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._targetWwNs !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetWwNs = this._targetWwNs;
    }
    if (this._wwids !== undefined) {
      hasAnyValues = true;
      internalValueResult.wwids = this._wwids;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesFc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fsType = undefined;
      this._lun = undefined;
      this._readOnly = undefined;
      this._targetWwNs = undefined;
      this._wwids = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fsType = value.fsType;
      this._lun = value.lun;
      this._readOnly = value.readOnly;
      this._targetWwNs = value.targetWwNs;
      this._wwids = value.wwids;
    }
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
  }

  // lun - computed: false, optional: true, required: false
  private _lun?: number; 
  public get lun() {
    return this.getNumberAttribute('lun');
  }
  public set lun(value: number) {
    this._lun = value;
  }
  public resetLun() {
    this._lun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lunInput() {
    return this._lun;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // target_ww_ns - computed: false, optional: true, required: false
  private _targetWwNs?: string[]; 
  public get targetWwNs() {
    return this.getListAttribute('target_ww_ns');
  }
  public set targetWwNs(value: string[]) {
    this._targetWwNs = value;
  }
  public resetTargetWwNs() {
    this._targetWwNs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetWwNsInput() {
    return this._targetWwNs;
  }

  // wwids - computed: false, optional: true, required: false
  private _wwids?: string[]; 
  public get wwids() {
    return this.getListAttribute('wwids');
  }
  public set wwids(value: string[]) {
    this._wwids = value;
  }
  public resetWwids() {
    this._wwids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wwidsInput() {
    return this._wwids;
  }
}
export interface DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesFlexVolumeSecretRef {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#name DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesFlexVolumeSecretRefToTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesFlexVolumeSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesFlexVolumeSecretRefToHclTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesFlexVolumeSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesFlexVolumeSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesFlexVolumeSecretRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesFlexVolumeSecretRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesFlexVolume {
  /**
  * driver is the name of the driver to use for this volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#driver DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#driver}
  */
  readonly driver: string;
  /**
  * fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. 'ext4', 'xfs', 'ntfs'. The default filesystem depends on FlexVolume script.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#fs_type DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * options is Optional: this field holds extra command options if any.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#options DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#options}
  */
  readonly options?: { [key: string]: string };
  /**
  * readOnly is Optional: defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#read_only DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * secretRef is Optional: secretRef is reference to the secret object containing sensitive information to pass to the plugin scripts. This may be empty if no secret object is specified. If the secret object contains more than one secret, all secrets are passed to the plugin scripts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#secret_ref DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesFlexVolumeSecretRef;
}

export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesFlexVolumeToTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesFlexVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    driver: cdktf.stringToTerraform(struct!.driver),
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    options: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.options),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_ref: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesFlexVolumeSecretRefToTerraform(struct!.secretRef),
  }
}


export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesFlexVolumeToHclTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesFlexVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    driver: {
      value: cdktf.stringToHclTerraform(struct!.driver),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fs_type: {
      value: cdktf.stringToHclTerraform(struct!.fsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    options: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.options),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    secret_ref: {
      value: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesFlexVolumeSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesFlexVolumeSecretRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesFlexVolumeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesFlexVolume | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._driver !== undefined) {
      hasAnyValues = true;
      internalValueResult.driver = this._driver;
    }
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._options !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesFlexVolume | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._driver = undefined;
      this._fsType = undefined;
      this._options = undefined;
      this._readOnly = undefined;
      this._secretRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._driver = value.driver;
      this._fsType = value.fsType;
      this._options = value.options;
      this._readOnly = value.readOnly;
      this._secretRef.internalValue = value.secretRef;
    }
  }

  // driver - computed: false, optional: false, required: true
  private _driver?: string; 
  public get driver() {
    return this.getStringAttribute('driver');
  }
  public set driver(value: string) {
    this._driver = value;
  }
  // Temporarily expose input value. Use with caution.
  public get driverInput() {
    return this._driver;
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
  }

  // options - computed: false, optional: true, required: false
  private _options?: { [key: string]: string }; 
  public get options() {
    return this.getStringMapAttribute('options');
  }
  public set options(value: { [key: string]: string }) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // secret_ref - computed: false, optional: true, required: false
  private _secretRef = new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesFlexVolumeSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesFlexVolumeSecretRef) {
    this._secretRef.internalValue = value;
  }
  public resetSecretRef() {
    this._secretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }
}
export interface DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesFlocker {
  /**
  * datasetName is Name of the dataset stored as metadata -> name on the dataset for Flocker should be considered as deprecated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#dataset_name DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#dataset_name}
  */
  readonly datasetName?: string;
  /**
  * datasetUUID is the UUID of the dataset. This is unique identifier of a Flocker dataset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#dataset_uuid DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#dataset_uuid}
  */
  readonly datasetUuid?: string;
}

export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesFlockerToTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesFlocker | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataset_name: cdktf.stringToTerraform(struct!.datasetName),
    dataset_uuid: cdktf.stringToTerraform(struct!.datasetUuid),
  }
}


export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesFlockerToHclTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesFlocker | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dataset_name: {
      value: cdktf.stringToHclTerraform(struct!.datasetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dataset_uuid: {
      value: cdktf.stringToHclTerraform(struct!.datasetUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesFlockerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesFlocker | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetName = this._datasetName;
    }
    if (this._datasetUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetUuid = this._datasetUuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesFlocker | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datasetName = undefined;
      this._datasetUuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datasetName = value.datasetName;
      this._datasetUuid = value.datasetUuid;
    }
  }

  // dataset_name - computed: false, optional: true, required: false
  private _datasetName?: string; 
  public get datasetName() {
    return this.getStringAttribute('dataset_name');
  }
  public set datasetName(value: string) {
    this._datasetName = value;
  }
  public resetDatasetName() {
    this._datasetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetNameInput() {
    return this._datasetName;
  }

  // dataset_uuid - computed: false, optional: true, required: false
  private _datasetUuid?: string; 
  public get datasetUuid() {
    return this.getStringAttribute('dataset_uuid');
  }
  public set datasetUuid(value: string) {
    this._datasetUuid = value;
  }
  public resetDatasetUuid() {
    this._datasetUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetUuidInput() {
    return this._datasetUuid;
  }
}
export interface DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesGcePersistentDisk {
  /**
  * fsType is filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk TODO: how do we prevent errors in the filesystem from compromising the machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#fs_type DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * partition is the partition in the volume that you want to mount. If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as '1'. Similarly, the volume partition for /dev/sda is '0' (or you can leave the property empty). More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#partition DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#partition}
  */
  readonly partition?: number;
  /**
  * pdName is unique name of the PD resource in GCE. Used to identify the disk in GCE. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#pd_name DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#pd_name}
  */
  readonly pdName: string;
  /**
  * readOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#read_only DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
}

export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesGcePersistentDiskToTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesGcePersistentDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    partition: cdktf.numberToTerraform(struct!.partition),
    pd_name: cdktf.stringToTerraform(struct!.pdName),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
  }
}


export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesGcePersistentDiskToHclTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesGcePersistentDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fs_type: {
      value: cdktf.stringToHclTerraform(struct!.fsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    partition: {
      value: cdktf.numberToHclTerraform(struct!.partition),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pd_name: {
      value: cdktf.stringToHclTerraform(struct!.pdName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesGcePersistentDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesGcePersistentDisk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._partition !== undefined) {
      hasAnyValues = true;
      internalValueResult.partition = this._partition;
    }
    if (this._pdName !== undefined) {
      hasAnyValues = true;
      internalValueResult.pdName = this._pdName;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesGcePersistentDisk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fsType = undefined;
      this._partition = undefined;
      this._pdName = undefined;
      this._readOnly = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fsType = value.fsType;
      this._partition = value.partition;
      this._pdName = value.pdName;
      this._readOnly = value.readOnly;
    }
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
  }

  // partition - computed: false, optional: true, required: false
  private _partition?: number; 
  public get partition() {
    return this.getNumberAttribute('partition');
  }
  public set partition(value: number) {
    this._partition = value;
  }
  public resetPartition() {
    this._partition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionInput() {
    return this._partition;
  }

  // pd_name - computed: false, optional: false, required: true
  private _pdName?: string; 
  public get pdName() {
    return this.getStringAttribute('pd_name');
  }
  public set pdName(value: string) {
    this._pdName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pdNameInput() {
    return this._pdName;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }
}
export interface DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesGitRepo {
  /**
  * directory is the target directory name. Must not contain or start with '..'. If '.' is supplied, the volume directory will be the git repository. Otherwise, if specified, the volume will contain the git repository in the subdirectory with the given name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#directory DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#directory}
  */
  readonly directory?: string;
  /**
  * repository is the URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#repository DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#repository}
  */
  readonly repository: string;
  /**
  * revision is the commit hash for the specified revision.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#revision DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#revision}
  */
  readonly revision?: string;
}

export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesGitRepoToTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesGitRepo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    directory: cdktf.stringToTerraform(struct!.directory),
    repository: cdktf.stringToTerraform(struct!.repository),
    revision: cdktf.stringToTerraform(struct!.revision),
  }
}


export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesGitRepoToHclTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesGitRepo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    directory: {
      value: cdktf.stringToHclTerraform(struct!.directory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repository: {
      value: cdktf.stringToHclTerraform(struct!.repository),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    revision: {
      value: cdktf.stringToHclTerraform(struct!.revision),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesGitRepoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesGitRepo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._directory !== undefined) {
      hasAnyValues = true;
      internalValueResult.directory = this._directory;
    }
    if (this._repository !== undefined) {
      hasAnyValues = true;
      internalValueResult.repository = this._repository;
    }
    if (this._revision !== undefined) {
      hasAnyValues = true;
      internalValueResult.revision = this._revision;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesGitRepo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._directory = undefined;
      this._repository = undefined;
      this._revision = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._directory = value.directory;
      this._repository = value.repository;
      this._revision = value.revision;
    }
  }

  // directory - computed: false, optional: true, required: false
  private _directory?: string; 
  public get directory() {
    return this.getStringAttribute('directory');
  }
  public set directory(value: string) {
    this._directory = value;
  }
  public resetDirectory() {
    this._directory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryInput() {
    return this._directory;
  }

  // repository - computed: false, optional: false, required: true
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }

  // revision - computed: false, optional: true, required: false
  private _revision?: string; 
  public get revision() {
    return this.getStringAttribute('revision');
  }
  public set revision(value: string) {
    this._revision = value;
  }
  public resetRevision() {
    this._revision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionInput() {
    return this._revision;
  }
}
export interface DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesGlusterfs {
  /**
  * endpoints is the endpoint name that details Glusterfs topology. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#endpoints DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#endpoints}
  */
  readonly endpoints: string;
  /**
  * path is the Glusterfs volume path. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#path DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#path}
  */
  readonly path: string;
  /**
  * readOnly here will force the Glusterfs volume to be mounted with read-only permissions. Defaults to false. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#read_only DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
}

export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesGlusterfsToTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesGlusterfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoints: cdktf.stringToTerraform(struct!.endpoints),
    path: cdktf.stringToTerraform(struct!.path),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
  }
}


export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesGlusterfsToHclTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesGlusterfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoints: {
      value: cdktf.stringToHclTerraform(struct!.endpoints),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesGlusterfsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesGlusterfs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoints !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoints = this._endpoints;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesGlusterfs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpoints = undefined;
      this._path = undefined;
      this._readOnly = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpoints = value.endpoints;
      this._path = value.path;
      this._readOnly = value.readOnly;
    }
  }

  // endpoints - computed: false, optional: false, required: true
  private _endpoints?: string; 
  public get endpoints() {
    return this.getStringAttribute('endpoints');
  }
  public set endpoints(value: string) {
    this._endpoints = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointsInput() {
    return this._endpoints;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }
}
export interface DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesHostPath {
  /**
  * path of the directory on the host. If the path is a symlink, it will follow the link to the real path. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#path DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#path}
  */
  readonly path: string;
  /**
  * type for HostPath Volume Defaults to '' More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#type DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesHostPathToTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesHostPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesHostPathToHclTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesHostPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesHostPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesHostPath | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesHostPath | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._path = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._path = value.path;
      this._type = value.type;
    }
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesIscsiSecretRef {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#name DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesIscsiSecretRefToTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesIscsiSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesIscsiSecretRefToHclTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesIscsiSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesIscsiSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesIscsiSecretRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesIscsiSecretRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesIscsi {
  /**
  * chapAuthDiscovery defines whether support iSCSI Discovery CHAP authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#chap_auth_discovery DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#chap_auth_discovery}
  */
  readonly chapAuthDiscovery?: boolean | cdktf.IResolvable;
  /**
  * chapAuthSession defines whether support iSCSI Session CHAP authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#chap_auth_session DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#chap_auth_session}
  */
  readonly chapAuthSession?: boolean | cdktf.IResolvable;
  /**
  * fsType is the filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#iscsi TODO: how do we prevent errors in the filesystem from compromising the machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#fs_type DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * initiatorName is the custom iSCSI Initiator Name. If initiatorName is specified with iscsiInterface simultaneously, new iSCSI interface <target portal>:<volume name> will be created for the connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#initiator_name DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#initiator_name}
  */
  readonly initiatorName?: string;
  /**
  * iqn is the target iSCSI Qualified Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#iqn DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#iqn}
  */
  readonly iqn: string;
  /**
  * iscsiInterface is the interface Name that uses an iSCSI transport. Defaults to 'default' (tcp).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#iscsi_interface DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#iscsi_interface}
  */
  readonly iscsiInterface?: string;
  /**
  * lun represents iSCSI Target Lun number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#lun DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#lun}
  */
  readonly lun: number;
  /**
  * portals is the iSCSI Target Portal List. The portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#portals DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#portals}
  */
  readonly portals?: string[];
  /**
  * readOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#read_only DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * secretRef is the CHAP Secret for iSCSI target and initiator authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#secret_ref DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesIscsiSecretRef;
  /**
  * targetPortal is iSCSI Target Portal. The Portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#target_portal DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#target_portal}
  */
  readonly targetPortal: string;
}

export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesIscsiToTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesIscsi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    chap_auth_discovery: cdktf.booleanToTerraform(struct!.chapAuthDiscovery),
    chap_auth_session: cdktf.booleanToTerraform(struct!.chapAuthSession),
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    initiator_name: cdktf.stringToTerraform(struct!.initiatorName),
    iqn: cdktf.stringToTerraform(struct!.iqn),
    iscsi_interface: cdktf.stringToTerraform(struct!.iscsiInterface),
    lun: cdktf.numberToTerraform(struct!.lun),
    portals: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.portals),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_ref: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesIscsiSecretRefToTerraform(struct!.secretRef),
    target_portal: cdktf.stringToTerraform(struct!.targetPortal),
  }
}


export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesIscsiToHclTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesIscsi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    chap_auth_discovery: {
      value: cdktf.booleanToHclTerraform(struct!.chapAuthDiscovery),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    chap_auth_session: {
      value: cdktf.booleanToHclTerraform(struct!.chapAuthSession),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fs_type: {
      value: cdktf.stringToHclTerraform(struct!.fsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    initiator_name: {
      value: cdktf.stringToHclTerraform(struct!.initiatorName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iqn: {
      value: cdktf.stringToHclTerraform(struct!.iqn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iscsi_interface: {
      value: cdktf.stringToHclTerraform(struct!.iscsiInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lun: {
      value: cdktf.numberToHclTerraform(struct!.lun),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    portals: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.portals),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    secret_ref: {
      value: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesIscsiSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesIscsiSecretRef",
    },
    target_portal: {
      value: cdktf.stringToHclTerraform(struct!.targetPortal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesIscsiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesIscsi | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chapAuthDiscovery !== undefined) {
      hasAnyValues = true;
      internalValueResult.chapAuthDiscovery = this._chapAuthDiscovery;
    }
    if (this._chapAuthSession !== undefined) {
      hasAnyValues = true;
      internalValueResult.chapAuthSession = this._chapAuthSession;
    }
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._initiatorName !== undefined) {
      hasAnyValues = true;
      internalValueResult.initiatorName = this._initiatorName;
    }
    if (this._iqn !== undefined) {
      hasAnyValues = true;
      internalValueResult.iqn = this._iqn;
    }
    if (this._iscsiInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.iscsiInterface = this._iscsiInterface;
    }
    if (this._lun !== undefined) {
      hasAnyValues = true;
      internalValueResult.lun = this._lun;
    }
    if (this._portals !== undefined) {
      hasAnyValues = true;
      internalValueResult.portals = this._portals;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    if (this._targetPortal !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetPortal = this._targetPortal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesIscsi | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._chapAuthDiscovery = undefined;
      this._chapAuthSession = undefined;
      this._fsType = undefined;
      this._initiatorName = undefined;
      this._iqn = undefined;
      this._iscsiInterface = undefined;
      this._lun = undefined;
      this._portals = undefined;
      this._readOnly = undefined;
      this._secretRef.internalValue = undefined;
      this._targetPortal = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._chapAuthDiscovery = value.chapAuthDiscovery;
      this._chapAuthSession = value.chapAuthSession;
      this._fsType = value.fsType;
      this._initiatorName = value.initiatorName;
      this._iqn = value.iqn;
      this._iscsiInterface = value.iscsiInterface;
      this._lun = value.lun;
      this._portals = value.portals;
      this._readOnly = value.readOnly;
      this._secretRef.internalValue = value.secretRef;
      this._targetPortal = value.targetPortal;
    }
  }

  // chap_auth_discovery - computed: false, optional: true, required: false
  private _chapAuthDiscovery?: boolean | cdktf.IResolvable; 
  public get chapAuthDiscovery() {
    return this.getBooleanAttribute('chap_auth_discovery');
  }
  public set chapAuthDiscovery(value: boolean | cdktf.IResolvable) {
    this._chapAuthDiscovery = value;
  }
  public resetChapAuthDiscovery() {
    this._chapAuthDiscovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chapAuthDiscoveryInput() {
    return this._chapAuthDiscovery;
  }

  // chap_auth_session - computed: false, optional: true, required: false
  private _chapAuthSession?: boolean | cdktf.IResolvable; 
  public get chapAuthSession() {
    return this.getBooleanAttribute('chap_auth_session');
  }
  public set chapAuthSession(value: boolean | cdktf.IResolvable) {
    this._chapAuthSession = value;
  }
  public resetChapAuthSession() {
    this._chapAuthSession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chapAuthSessionInput() {
    return this._chapAuthSession;
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
  }

  // initiator_name - computed: false, optional: true, required: false
  private _initiatorName?: string; 
  public get initiatorName() {
    return this.getStringAttribute('initiator_name');
  }
  public set initiatorName(value: string) {
    this._initiatorName = value;
  }
  public resetInitiatorName() {
    this._initiatorName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initiatorNameInput() {
    return this._initiatorName;
  }

  // iqn - computed: false, optional: false, required: true
  private _iqn?: string; 
  public get iqn() {
    return this.getStringAttribute('iqn');
  }
  public set iqn(value: string) {
    this._iqn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iqnInput() {
    return this._iqn;
  }

  // iscsi_interface - computed: false, optional: true, required: false
  private _iscsiInterface?: string; 
  public get iscsiInterface() {
    return this.getStringAttribute('iscsi_interface');
  }
  public set iscsiInterface(value: string) {
    this._iscsiInterface = value;
  }
  public resetIscsiInterface() {
    this._iscsiInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iscsiInterfaceInput() {
    return this._iscsiInterface;
  }

  // lun - computed: false, optional: false, required: true
  private _lun?: number; 
  public get lun() {
    return this.getNumberAttribute('lun');
  }
  public set lun(value: number) {
    this._lun = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lunInput() {
    return this._lun;
  }

  // portals - computed: false, optional: true, required: false
  private _portals?: string[]; 
  public get portals() {
    return this.getListAttribute('portals');
  }
  public set portals(value: string[]) {
    this._portals = value;
  }
  public resetPortals() {
    this._portals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portalsInput() {
    return this._portals;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // secret_ref - computed: false, optional: true, required: false
  private _secretRef = new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesIscsiSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesIscsiSecretRef) {
    this._secretRef.internalValue = value;
  }
  public resetSecretRef() {
    this._secretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }

  // target_portal - computed: false, optional: false, required: true
  private _targetPortal?: string; 
  public get targetPortal() {
    return this.getStringAttribute('target_portal');
  }
  public set targetPortal(value: string) {
    this._targetPortal = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPortalInput() {
    return this._targetPortal;
  }
}
export interface DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesNfs {
  /**
  * path that is exported by the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#path DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#path}
  */
  readonly path: string;
  /**
  * readOnly here will force the NFS export to be mounted with read-only permissions. Defaults to false. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#read_only DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * server is the hostname or IP address of the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#server DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#server}
  */
  readonly server: string;
}

export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesNfsToTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesNfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    server: cdktf.stringToTerraform(struct!.server),
  }
}


export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesNfsToHclTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesNfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    server: {
      value: cdktf.stringToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesNfsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesNfs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesNfs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._path = undefined;
      this._readOnly = undefined;
      this._server = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._path = value.path;
      this._readOnly = value.readOnly;
      this._server = value.server;
    }
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // server - computed: false, optional: false, required: true
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }
}
export interface DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesPersistentVolumeClaim {
  /**
  * claimName is the name of a PersistentVolumeClaim in the same namespace as the pod using this volume. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#claim_name DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#claim_name}
  */
  readonly claimName: string;
  /**
  * readOnly Will force the ReadOnly setting in VolumeMounts. Default false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#read_only DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
}

export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesPersistentVolumeClaimToTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesPersistentVolumeClaim | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claim_name: cdktf.stringToTerraform(struct!.claimName),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
  }
}


export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesPersistentVolumeClaimToHclTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesPersistentVolumeClaim | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claim_name: {
      value: cdktf.stringToHclTerraform(struct!.claimName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesPersistentVolumeClaimOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesPersistentVolumeClaim | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claimName !== undefined) {
      hasAnyValues = true;
      internalValueResult.claimName = this._claimName;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesPersistentVolumeClaim | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._claimName = undefined;
      this._readOnly = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._claimName = value.claimName;
      this._readOnly = value.readOnly;
    }
  }

  // claim_name - computed: false, optional: false, required: true
  private _claimName?: string; 
  public get claimName() {
    return this.getStringAttribute('claim_name');
  }
  public set claimName(value: string) {
    this._claimName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get claimNameInput() {
    return this._claimName;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }
}
export interface DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesPhotonPersistentDisk {
  /**
  * fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#fs_type DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * pdID is the ID that identifies Photon Controller persistent disk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#pd_id DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#pd_id}
  */
  readonly pdId: string;
}

export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesPhotonPersistentDiskToTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesPhotonPersistentDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    pd_id: cdktf.stringToTerraform(struct!.pdId),
  }
}


export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesPhotonPersistentDiskToHclTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesPhotonPersistentDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fs_type: {
      value: cdktf.stringToHclTerraform(struct!.fsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pd_id: {
      value: cdktf.stringToHclTerraform(struct!.pdId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesPhotonPersistentDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesPhotonPersistentDisk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._pdId !== undefined) {
      hasAnyValues = true;
      internalValueResult.pdId = this._pdId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesPhotonPersistentDisk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fsType = undefined;
      this._pdId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fsType = value.fsType;
      this._pdId = value.pdId;
    }
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
  }

  // pd_id - computed: false, optional: false, required: true
  private _pdId?: string; 
  public get pdId() {
    return this.getStringAttribute('pd_id');
  }
  public set pdId(value: string) {
    this._pdId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pdIdInput() {
    return this._pdId;
  }
}
export interface DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesPortworxVolume {
  /**
  * fSType represents the filesystem type to mount Must be a filesystem type supported by the host operating system. Ex. 'ext4', 'xfs'. Implicitly inferred to be 'ext4' if unspecified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#fs_type DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#read_only DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * volumeID uniquely identifies a Portworx volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#volume_id DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#volume_id}
  */
  readonly volumeId: string;
}

export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesPortworxVolumeToTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesPortworxVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    volume_id: cdktf.stringToTerraform(struct!.volumeId),
  }
}


export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesPortworxVolumeToHclTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesPortworxVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fs_type: {
      value: cdktf.stringToHclTerraform(struct!.fsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    volume_id: {
      value: cdktf.stringToHclTerraform(struct!.volumeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesPortworxVolumeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesPortworxVolume | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._volumeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeId = this._volumeId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesPortworxVolume | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fsType = undefined;
      this._readOnly = undefined;
      this._volumeId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fsType = value.fsType;
      this._readOnly = value.readOnly;
      this._volumeId = value.volumeId;
    }
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // volume_id - computed: false, optional: false, required: true
  private _volumeId?: string; 
  public get volumeId() {
    return this.getStringAttribute('volume_id');
  }
  public set volumeId(value: string) {
    this._volumeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeIdInput() {
    return this._volumeId;
  }
}
export interface DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesConfigMapItems {
  /**
  * key is the key to project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#key DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * mode is Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#mode DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#mode}
  */
  readonly mode?: number;
  /**
  * path is the relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#path DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesConfigMapItemsToTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesConfigMapItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    mode: cdktf.numberToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesConfigMapItemsToHclTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesConfigMapItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.numberToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesConfigMapItemsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesConfigMapItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesConfigMapItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._mode = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._mode = value.mode;
      this._path = value.path;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: number; 
  public get mode() {
    return this.getNumberAttribute('mode');
  }
  public set mode(value: number) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

export class DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesConfigMapItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesConfigMapItems[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesConfigMapItemsOutputReference {
    return new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesConfigMapItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesConfigMap {
  /**
  * items if unspecified, each key-value pair in the Data field of the referenced ConfigMap will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the ConfigMap, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#items DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#items}
  */
  readonly items?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesConfigMapItems[] | cdktf.IResolvable;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#name DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * optional specify whether the ConfigMap or its keys must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#optional DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesConfigMapToTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesConfigMapItemsToTerraform, false)(struct!.items),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesConfigMapToHclTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesConfigMapItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesConfigMapItemsList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesConfigMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesConfigMap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesConfigMap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._items.internalValue = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._items.internalValue = value.items;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // items - computed: false, optional: true, required: false
  private _items = new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesConfigMapItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesConfigMapItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiItemsFieldRef {
  /**
  * Version of the schema the FieldPath is written in terms of, defaults to 'v1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#api_version DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Path of the field to select in the specified API version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#field_path DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#field_path}
  */
  readonly fieldPath: string;
}

export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiItemsFieldRefToTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiItemsFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}


export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiItemsFieldRefToHclTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiItemsFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_version: {
      value: cdktf.stringToHclTerraform(struct!.apiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_path: {
      value: cdktf.stringToHclTerraform(struct!.fieldPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiItemsFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiItemsFieldRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._fieldPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldPath = this._fieldPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiItemsFieldRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._fieldPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._fieldPath = value.fieldPath;
    }
  }

  // api_version - computed: false, optional: true, required: false
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // field_path - computed: false, optional: false, required: true
  private _fieldPath?: string; 
  public get fieldPath() {
    return this.getStringAttribute('field_path');
  }
  public set fieldPath(value: string) {
    this._fieldPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldPathInput() {
    return this._fieldPath;
  }
}
export interface DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiItemsResourceFieldRef {
  /**
  * Container name: required for volumes, optional for env vars
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#container_name DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#container_name}
  */
  readonly containerName?: string;
  /**
  * Specifies the output format of the exposed resources, defaults to '1'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#divisor DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#divisor}
  */
  readonly divisor?: string;
  /**
  * Required: resource to select
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#resource DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#resource}
  */
  readonly resource: string;
}

export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiItemsResourceFieldRefToTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiItemsResourceFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    divisor: cdktf.stringToTerraform(struct!.divisor),
    resource: cdktf.stringToTerraform(struct!.resource),
  }
}


export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiItemsResourceFieldRefToHclTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiItemsResourceFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_name: {
      value: cdktf.stringToHclTerraform(struct!.containerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    divisor: {
      value: cdktf.stringToHclTerraform(struct!.divisor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource: {
      value: cdktf.stringToHclTerraform(struct!.resource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiItemsResourceFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiItemsResourceFieldRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerName = this._containerName;
    }
    if (this._divisor !== undefined) {
      hasAnyValues = true;
      internalValueResult.divisor = this._divisor;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiItemsResourceFieldRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerName = undefined;
      this._divisor = undefined;
      this._resource = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerName = value.containerName;
      this._divisor = value.divisor;
      this._resource = value.resource;
    }
  }

  // container_name - computed: false, optional: true, required: false
  private _containerName?: string; 
  public get containerName() {
    return this.getStringAttribute('container_name');
  }
  public set containerName(value: string) {
    this._containerName = value;
  }
  public resetContainerName() {
    this._containerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNameInput() {
    return this._containerName;
  }

  // divisor - computed: false, optional: true, required: false
  private _divisor?: string; 
  public get divisor() {
    return this.getStringAttribute('divisor');
  }
  public set divisor(value: string) {
    this._divisor = value;
  }
  public resetDivisor() {
    this._divisor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get divisorInput() {
    return this._divisor;
  }

  // resource - computed: false, optional: false, required: true
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }
}
export interface DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiItems {
  /**
  * Required: Selects a field of the pod: only annotations, labels, name and namespace are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#field_ref DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#field_ref}
  */
  readonly fieldRef?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiItemsFieldRef;
  /**
  * Optional: mode bits used to set permissions on this file, must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#mode DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#mode}
  */
  readonly mode?: number;
  /**
  * Required: Path is the relative path name of the file to be created. Must not be absolute or contain the '..' path. Must be utf-8 encoded. The first item of the relative path must not start with '..'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#path DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#path}
  */
  readonly path: string;
  /**
  * Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, requests.cpu and requests.memory) are currently supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#resource_field_ref DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#resource_field_ref}
  */
  readonly resourceFieldRef?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiItemsResourceFieldRef;
}

export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiItemsToTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_ref: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiItemsFieldRefToTerraform(struct!.fieldRef),
    mode: cdktf.numberToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
    resource_field_ref: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiItemsResourceFieldRefToTerraform(struct!.resourceFieldRef),
  }
}


export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiItemsToHclTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_ref: {
      value: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiItemsFieldRefToHclTerraform(struct!.fieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiItemsFieldRef",
    },
    mode: {
      value: cdktf.numberToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_field_ref: {
      value: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiItemsResourceFieldRefToHclTerraform(struct!.resourceFieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiItemsResourceFieldRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiItemsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldRef = this._fieldRef?.internalValue;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._resourceFieldRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceFieldRef = this._resourceFieldRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldRef.internalValue = undefined;
      this._mode = undefined;
      this._path = undefined;
      this._resourceFieldRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldRef.internalValue = value.fieldRef;
      this._mode = value.mode;
      this._path = value.path;
      this._resourceFieldRef.internalValue = value.resourceFieldRef;
    }
  }

  // field_ref - computed: false, optional: true, required: false
  private _fieldRef = new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiItemsFieldRefOutputReference(this, "field_ref");
  public get fieldRef() {
    return this._fieldRef;
  }
  public putFieldRef(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiItemsFieldRef) {
    this._fieldRef.internalValue = value;
  }
  public resetFieldRef() {
    this._fieldRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldRefInput() {
    return this._fieldRef.internalValue;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: number; 
  public get mode() {
    return this.getNumberAttribute('mode');
  }
  public set mode(value: number) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // resource_field_ref - computed: false, optional: true, required: false
  private _resourceFieldRef = new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiItemsResourceFieldRefOutputReference(this, "resource_field_ref");
  public get resourceFieldRef() {
    return this._resourceFieldRef;
  }
  public putResourceFieldRef(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiItemsResourceFieldRef) {
    this._resourceFieldRef.internalValue = value;
  }
  public resetResourceFieldRef() {
    this._resourceFieldRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceFieldRefInput() {
    return this._resourceFieldRef.internalValue;
  }
}

export class DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiItems[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiItemsOutputReference {
    return new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApi {
  /**
  * Items is a list of DownwardAPIVolume file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#items DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#items}
  */
  readonly items?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiItems[] | cdktf.IResolvable;
}

export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiToTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiItemsToTerraform, false)(struct!.items),
  }
}


export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiToHclTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiItemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApi | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApi | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._items.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._items.internalValue = value.items;
    }
  }

  // items - computed: false, optional: true, required: false
  private _items = new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }
}
export interface DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesSecretItems {
  /**
  * key is the key to project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#key DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * mode is Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#mode DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#mode}
  */
  readonly mode?: number;
  /**
  * path is the relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#path DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesSecretItemsToTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesSecretItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    mode: cdktf.numberToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesSecretItemsToHclTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesSecretItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.numberToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesSecretItemsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesSecretItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesSecretItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._mode = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._mode = value.mode;
      this._path = value.path;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: number; 
  public get mode() {
    return this.getNumberAttribute('mode');
  }
  public set mode(value: number) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

export class DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesSecretItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesSecretItems[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesSecretItemsOutputReference {
    return new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesSecretItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesSecret {
  /**
  * items if unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#items DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#items}
  */
  readonly items?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesSecretItems[] | cdktf.IResolvable;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#name DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * optional field specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#optional DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesSecretToTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesSecretItemsToTerraform, false)(struct!.items),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesSecretToHclTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesSecretItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesSecretItemsList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._items.internalValue = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._items.internalValue = value.items;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // items - computed: false, optional: true, required: false
  private _items = new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesSecretItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesSecretItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesServiceAccountToken {
  /**
  * audience is the intended audience of the token. A recipient of a token must identify itself with an identifier specified in the audience of the token, and otherwise should reject the token. The audience defaults to the identifier of the apiserver.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#audience DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#audience}
  */
  readonly audience?: string;
  /**
  * expirationSeconds is the requested duration of validity of the service account token. As the token approaches expiration, the kubelet volume plugin will proactively rotate the service account token. The kubelet will start trying to rotate the token if the token is older than 80 percent of its time to live or if the token is older than 24 hours.Defaults to 1 hour and must be at least 10 minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#expiration_seconds DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#expiration_seconds}
  */
  readonly expirationSeconds?: number;
  /**
  * path is the path relative to the mount point of the file to project the token into.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#path DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesServiceAccountTokenToTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesServiceAccountToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audience: cdktf.stringToTerraform(struct!.audience),
    expiration_seconds: cdktf.numberToTerraform(struct!.expirationSeconds),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesServiceAccountTokenToHclTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesServiceAccountToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audience: {
      value: cdktf.stringToHclTerraform(struct!.audience),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expiration_seconds: {
      value: cdktf.numberToHclTerraform(struct!.expirationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesServiceAccountTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesServiceAccountToken | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audience !== undefined) {
      hasAnyValues = true;
      internalValueResult.audience = this._audience;
    }
    if (this._expirationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.expirationSeconds = this._expirationSeconds;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesServiceAccountToken | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._audience = undefined;
      this._expirationSeconds = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._audience = value.audience;
      this._expirationSeconds = value.expirationSeconds;
      this._path = value.path;
    }
  }

  // audience - computed: false, optional: true, required: false
  private _audience?: string; 
  public get audience() {
    return this.getStringAttribute('audience');
  }
  public set audience(value: string) {
    this._audience = value;
  }
  public resetAudience() {
    this._audience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience;
  }

  // expiration_seconds - computed: false, optional: true, required: false
  private _expirationSeconds?: number; 
  public get expirationSeconds() {
    return this.getNumberAttribute('expiration_seconds');
  }
  public set expirationSeconds(value: number) {
    this._expirationSeconds = value;
  }
  public resetExpirationSeconds() {
    this._expirationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationSecondsInput() {
    return this._expirationSeconds;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}
export interface DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSources {
  /**
  * configMap information about the configMap data to project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#config_map DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#config_map}
  */
  readonly configMap?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesConfigMap;
  /**
  * downwardAPI information about the downwardAPI data to project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#downward_api DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#downward_api}
  */
  readonly downwardApi?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApi;
  /**
  * secret information about the secret data to project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#secret DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#secret}
  */
  readonly secret?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesSecret;
  /**
  * serviceAccountToken is information about the serviceAccountToken data to project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#service_account_token DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#service_account_token}
  */
  readonly serviceAccountToken?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesServiceAccountToken;
}

export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesToTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesConfigMapToTerraform(struct!.configMap),
    downward_api: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiToTerraform(struct!.downwardApi),
    secret: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesSecretToTerraform(struct!.secret),
    service_account_token: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesServiceAccountTokenToTerraform(struct!.serviceAccountToken),
  }
}


export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesToHclTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map: {
      value: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesConfigMapToHclTerraform(struct!.configMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesConfigMap",
    },
    downward_api: {
      value: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiToHclTerraform(struct!.downwardApi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApi",
    },
    secret: {
      value: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesSecret",
    },
    service_account_token: {
      value: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesServiceAccountTokenToHclTerraform(struct!.serviceAccountToken),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesServiceAccountToken",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMap = this._configMap?.internalValue;
    }
    if (this._downwardApi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.downwardApi = this._downwardApi?.internalValue;
    }
    if (this._secret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret?.internalValue;
    }
    if (this._serviceAccountToken?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountToken = this._serviceAccountToken?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMap.internalValue = undefined;
      this._downwardApi.internalValue = undefined;
      this._secret.internalValue = undefined;
      this._serviceAccountToken.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMap.internalValue = value.configMap;
      this._downwardApi.internalValue = value.downwardApi;
      this._secret.internalValue = value.secret;
      this._serviceAccountToken.internalValue = value.serviceAccountToken;
    }
  }

  // config_map - computed: false, optional: true, required: false
  private _configMap = new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesConfigMapOutputReference(this, "config_map");
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesConfigMap) {
    this._configMap.internalValue = value;
  }
  public resetConfigMap() {
    this._configMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapInput() {
    return this._configMap.internalValue;
  }

  // downward_api - computed: false, optional: true, required: false
  private _downwardApi = new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApiOutputReference(this, "downward_api");
  public get downwardApi() {
    return this._downwardApi;
  }
  public putDownwardApi(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesDownwardApi) {
    this._downwardApi.internalValue = value;
  }
  public resetDownwardApi() {
    this._downwardApi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downwardApiInput() {
    return this._downwardApi.internalValue;
  }

  // secret - computed: false, optional: true, required: false
  private _secret = new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesSecret) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }

  // service_account_token - computed: false, optional: true, required: false
  private _serviceAccountToken = new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesServiceAccountTokenOutputReference(this, "service_account_token");
  public get serviceAccountToken() {
    return this._serviceAccountToken;
  }
  public putServiceAccountToken(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesServiceAccountToken) {
    this._serviceAccountToken.internalValue = value;
  }
  public resetServiceAccountToken() {
    this._serviceAccountToken.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountTokenInput() {
    return this._serviceAccountToken.internalValue;
  }
}

export class DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesList extends cdktf.ComplexList {
  public internalValue? : DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSources[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesOutputReference {
    return new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjected {
  /**
  * defaultMode are the mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#default_mode DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#default_mode}
  */
  readonly defaultMode?: number;
  /**
  * sources is the list of volume projections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#sources DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#sources}
  */
  readonly sources?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSources[] | cdktf.IResolvable;
}

export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedToTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjected | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_mode: cdktf.numberToTerraform(struct!.defaultMode),
    sources: cdktf.listMapper(dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesToTerraform, false)(struct!.sources),
  }
}


export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedToHclTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjected | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_mode: {
      value: cdktf.numberToHclTerraform(struct!.defaultMode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sources: {
      value: cdktf.listMapperHcl(dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesToHclTerraform, false)(struct!.sources),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjected | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultMode = this._defaultMode;
    }
    if (this._sources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sources = this._sources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjected | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultMode = undefined;
      this._sources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultMode = value.defaultMode;
      this._sources.internalValue = value.sources;
    }
  }

  // default_mode - computed: false, optional: true, required: false
  private _defaultMode?: number; 
  public get defaultMode() {
    return this.getNumberAttribute('default_mode');
  }
  public set defaultMode(value: number) {
    this._defaultMode = value;
  }
  public resetDefaultMode() {
    this._defaultMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultModeInput() {
    return this._defaultMode;
  }

  // sources - computed: false, optional: true, required: false
  private _sources = new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSourcesList(this, "sources", false);
  public get sources() {
    return this._sources;
  }
  public putSources(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedSources[] | cdktf.IResolvable) {
    this._sources.internalValue = value;
  }
  public resetSources() {
    this._sources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesInput() {
    return this._sources.internalValue;
  }
}
export interface DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesQuobyte {
  /**
  * group to map volume access to Default is no group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#group DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#group}
  */
  readonly group?: string;
  /**
  * readOnly here will force the Quobyte volume to be mounted with read-only permissions. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#read_only DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * registry represents a single or multiple Quobyte Registry services specified as a string as host:port pair (multiple entries are separated with commas) which acts as the central registry for volumes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#registry DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#registry}
  */
  readonly registry: string;
  /**
  * tenant owning the given Quobyte volume in the Backend Used with dynamically provisioned Quobyte volumes, value is set by the plugin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#tenant DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#tenant}
  */
  readonly tenant?: string;
  /**
  * user to map volume access to Defaults to serivceaccount user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#user DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#user}
  */
  readonly user?: string;
  /**
  * volume is a string that references an already created Quobyte volume by name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#volume DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#volume}
  */
  readonly volume: string;
}

export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesQuobyteToTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesQuobyte | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    registry: cdktf.stringToTerraform(struct!.registry),
    tenant: cdktf.stringToTerraform(struct!.tenant),
    user: cdktf.stringToTerraform(struct!.user),
    volume: cdktf.stringToTerraform(struct!.volume),
  }
}


export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesQuobyteToHclTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesQuobyte | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    registry: {
      value: cdktf.stringToHclTerraform(struct!.registry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume: {
      value: cdktf.stringToHclTerraform(struct!.volume),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesQuobyteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesQuobyte | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._registry !== undefined) {
      hasAnyValues = true;
      internalValueResult.registry = this._registry;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    if (this._volume !== undefined) {
      hasAnyValues = true;
      internalValueResult.volume = this._volume;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesQuobyte | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._readOnly = undefined;
      this._registry = undefined;
      this._tenant = undefined;
      this._user = undefined;
      this._volume = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._group = value.group;
      this._readOnly = value.readOnly;
      this._registry = value.registry;
      this._tenant = value.tenant;
      this._user = value.user;
      this._volume = value.volume;
    }
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // registry - computed: false, optional: false, required: true
  private _registry?: string; 
  public get registry() {
    return this.getStringAttribute('registry');
  }
  public set registry(value: string) {
    this._registry = value;
  }
  // Temporarily expose input value. Use with caution.
  public get registryInput() {
    return this._registry;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // volume - computed: false, optional: false, required: true
  private _volume?: string; 
  public get volume() {
    return this.getStringAttribute('volume');
  }
  public set volume(value: string) {
    this._volume = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeInput() {
    return this._volume;
  }
}
export interface DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesRbdSecretRef {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#name DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesRbdSecretRefToTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesRbdSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesRbdSecretRefToHclTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesRbdSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesRbdSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesRbdSecretRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesRbdSecretRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesRbd {
  /**
  * fsType is the filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#rbd TODO: how do we prevent errors in the filesystem from compromising the machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#fs_type DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * image is the rados image name. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#image DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#image}
  */
  readonly image: string;
  /**
  * keyring is the path to key ring for RBDUser. Default is /etc/ceph/keyring. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#keyring DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#keyring}
  */
  readonly keyring?: string;
  /**
  * monitors is a collection of Ceph monitors. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#monitors DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#monitors}
  */
  readonly monitors: string[];
  /**
  * pool is the rados pool name. Default is rbd. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#pool DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#pool}
  */
  readonly pool?: string;
  /**
  * readOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#read_only DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * secretRef is name of the authentication secret for RBDUser. If provided overrides keyring. Default is nil. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#secret_ref DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesRbdSecretRef;
  /**
  * user is the rados user name. Default is admin. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#user DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#user}
  */
  readonly user?: string;
}

export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesRbdToTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesRbd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    image: cdktf.stringToTerraform(struct!.image),
    keyring: cdktf.stringToTerraform(struct!.keyring),
    monitors: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.monitors),
    pool: cdktf.stringToTerraform(struct!.pool),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_ref: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesRbdSecretRefToTerraform(struct!.secretRef),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesRbdToHclTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesRbd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fs_type: {
      value: cdktf.stringToHclTerraform(struct!.fsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keyring: {
      value: cdktf.stringToHclTerraform(struct!.keyring),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    monitors: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.monitors),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    pool: {
      value: cdktf.stringToHclTerraform(struct!.pool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    secret_ref: {
      value: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesRbdSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesRbdSecretRef",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesRbdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesRbd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._keyring !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyring = this._keyring;
    }
    if (this._monitors !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitors = this._monitors;
    }
    if (this._pool !== undefined) {
      hasAnyValues = true;
      internalValueResult.pool = this._pool;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesRbd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fsType = undefined;
      this._image = undefined;
      this._keyring = undefined;
      this._monitors = undefined;
      this._pool = undefined;
      this._readOnly = undefined;
      this._secretRef.internalValue = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fsType = value.fsType;
      this._image = value.image;
      this._keyring = value.keyring;
      this._monitors = value.monitors;
      this._pool = value.pool;
      this._readOnly = value.readOnly;
      this._secretRef.internalValue = value.secretRef;
      this._user = value.user;
    }
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
  }

  // image - computed: false, optional: false, required: true
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // keyring - computed: false, optional: true, required: false
  private _keyring?: string; 
  public get keyring() {
    return this.getStringAttribute('keyring');
  }
  public set keyring(value: string) {
    this._keyring = value;
  }
  public resetKeyring() {
    this._keyring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyringInput() {
    return this._keyring;
  }

  // monitors - computed: false, optional: false, required: true
  private _monitors?: string[]; 
  public get monitors() {
    return this.getListAttribute('monitors');
  }
  public set monitors(value: string[]) {
    this._monitors = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorsInput() {
    return this._monitors;
  }

  // pool - computed: false, optional: true, required: false
  private _pool?: string; 
  public get pool() {
    return this.getStringAttribute('pool');
  }
  public set pool(value: string) {
    this._pool = value;
  }
  public resetPool() {
    this._pool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolInput() {
    return this._pool;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // secret_ref - computed: false, optional: true, required: false
  private _secretRef = new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesRbdSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesRbdSecretRef) {
    this._secretRef.internalValue = value;
  }
  public resetSecretRef() {
    this._secretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesScaleIoSecretRef {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#name DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesScaleIoSecretRefToTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesScaleIoSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesScaleIoSecretRefToHclTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesScaleIoSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesScaleIoSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesScaleIoSecretRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesScaleIoSecretRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesScaleIo {
  /**
  * fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. 'ext4', 'xfs', 'ntfs'. Default is 'xfs'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#fs_type DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * gateway is the host address of the ScaleIO API Gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#gateway DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#gateway}
  */
  readonly gateway: string;
  /**
  * protectionDomain is the name of the ScaleIO Protection Domain for the configured storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#protection_domain DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#protection_domain}
  */
  readonly protectionDomain?: string;
  /**
  * readOnly Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#read_only DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * secretRef references to the secret for ScaleIO user and other sensitive information. If this is not provided, Login operation will fail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#secret_ref DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#secret_ref}
  */
  readonly secretRef: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesScaleIoSecretRef;
  /**
  * sslEnabled Flag enable/disable SSL communication with Gateway, default false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#ssl_enabled DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#ssl_enabled}
  */
  readonly sslEnabled?: boolean | cdktf.IResolvable;
  /**
  * storageMode indicates whether the storage for a volume should be ThickProvisioned or ThinProvisioned. Default is ThinProvisioned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#storage_mode DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#storage_mode}
  */
  readonly storageMode?: string;
  /**
  * storagePool is the ScaleIO Storage Pool associated with the protection domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#storage_pool DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#storage_pool}
  */
  readonly storagePool?: string;
  /**
  * system is the name of the storage system as configured in ScaleIO.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#system DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#system}
  */
  readonly systemAttribute: string;
  /**
  * volumeName is the name of a volume already created in the ScaleIO system that is associated with this volume source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#volume_name DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#volume_name}
  */
  readonly volumeName?: string;
}

export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesScaleIoToTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesScaleIo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    gateway: cdktf.stringToTerraform(struct!.gateway),
    protection_domain: cdktf.stringToTerraform(struct!.protectionDomain),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_ref: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesScaleIoSecretRefToTerraform(struct!.secretRef),
    ssl_enabled: cdktf.booleanToTerraform(struct!.sslEnabled),
    storage_mode: cdktf.stringToTerraform(struct!.storageMode),
    storage_pool: cdktf.stringToTerraform(struct!.storagePool),
    system: cdktf.stringToTerraform(struct!.systemAttribute),
    volume_name: cdktf.stringToTerraform(struct!.volumeName),
  }
}


export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesScaleIoToHclTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesScaleIo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fs_type: {
      value: cdktf.stringToHclTerraform(struct!.fsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gateway: {
      value: cdktf.stringToHclTerraform(struct!.gateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protection_domain: {
      value: cdktf.stringToHclTerraform(struct!.protectionDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    secret_ref: {
      value: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesScaleIoSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesScaleIoSecretRef",
    },
    ssl_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.sslEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    storage_mode: {
      value: cdktf.stringToHclTerraform(struct!.storageMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_pool: {
      value: cdktf.stringToHclTerraform(struct!.storagePool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    system: {
      value: cdktf.stringToHclTerraform(struct!.systemAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_name: {
      value: cdktf.stringToHclTerraform(struct!.volumeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesScaleIoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesScaleIo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway;
    }
    if (this._protectionDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.protectionDomain = this._protectionDomain;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    if (this._sslEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslEnabled = this._sslEnabled;
    }
    if (this._storageMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageMode = this._storageMode;
    }
    if (this._storagePool !== undefined) {
      hasAnyValues = true;
      internalValueResult.storagePool = this._storagePool;
    }
    if (this._system !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemAttribute = this._system;
    }
    if (this._volumeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeName = this._volumeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesScaleIo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fsType = undefined;
      this._gateway = undefined;
      this._protectionDomain = undefined;
      this._readOnly = undefined;
      this._secretRef.internalValue = undefined;
      this._sslEnabled = undefined;
      this._storageMode = undefined;
      this._storagePool = undefined;
      this._system = undefined;
      this._volumeName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fsType = value.fsType;
      this._gateway = value.gateway;
      this._protectionDomain = value.protectionDomain;
      this._readOnly = value.readOnly;
      this._secretRef.internalValue = value.secretRef;
      this._sslEnabled = value.sslEnabled;
      this._storageMode = value.storageMode;
      this._storagePool = value.storagePool;
      this._system = value.systemAttribute;
      this._volumeName = value.volumeName;
    }
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
  }

  // gateway - computed: false, optional: false, required: true
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
  }

  // protection_domain - computed: false, optional: true, required: false
  private _protectionDomain?: string; 
  public get protectionDomain() {
    return this.getStringAttribute('protection_domain');
  }
  public set protectionDomain(value: string) {
    this._protectionDomain = value;
  }
  public resetProtectionDomain() {
    this._protectionDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionDomainInput() {
    return this._protectionDomain;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // secret_ref - computed: false, optional: false, required: true
  private _secretRef = new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesScaleIoSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesScaleIoSecretRef) {
    this._secretRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }

  // ssl_enabled - computed: false, optional: true, required: false
  private _sslEnabled?: boolean | cdktf.IResolvable; 
  public get sslEnabled() {
    return this.getBooleanAttribute('ssl_enabled');
  }
  public set sslEnabled(value: boolean | cdktf.IResolvable) {
    this._sslEnabled = value;
  }
  public resetSslEnabled() {
    this._sslEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslEnabledInput() {
    return this._sslEnabled;
  }

  // storage_mode - computed: false, optional: true, required: false
  private _storageMode?: string; 
  public get storageMode() {
    return this.getStringAttribute('storage_mode');
  }
  public set storageMode(value: string) {
    this._storageMode = value;
  }
  public resetStorageMode() {
    this._storageMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageModeInput() {
    return this._storageMode;
  }

  // storage_pool - computed: false, optional: true, required: false
  private _storagePool?: string; 
  public get storagePool() {
    return this.getStringAttribute('storage_pool');
  }
  public set storagePool(value: string) {
    this._storagePool = value;
  }
  public resetStoragePool() {
    this._storagePool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storagePoolInput() {
    return this._storagePool;
  }

  // system - computed: false, optional: false, required: true
  private _system?: string; 
  public get systemAttribute() {
    return this.getStringAttribute('system');
  }
  public set systemAttribute(value: string) {
    this._system = value;
  }
  // Temporarily expose input value. Use with caution.
  public get systemAttributeInput() {
    return this._system;
  }

  // volume_name - computed: false, optional: true, required: false
  private _volumeName?: string; 
  public get volumeName() {
    return this.getStringAttribute('volume_name');
  }
  public set volumeName(value: string) {
    this._volumeName = value;
  }
  public resetVolumeName() {
    this._volumeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeNameInput() {
    return this._volumeName;
  }
}
export interface DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesSecretItems {
  /**
  * key is the key to project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#key DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * mode is Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#mode DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#mode}
  */
  readonly mode?: number;
  /**
  * path is the relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#path DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesSecretItemsToTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesSecretItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    mode: cdktf.numberToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesSecretItemsToHclTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesSecretItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.numberToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesSecretItemsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesSecretItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesSecretItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._mode = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._mode = value.mode;
      this._path = value.path;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: number; 
  public get mode() {
    return this.getNumberAttribute('mode');
  }
  public set mode(value: number) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

export class DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesSecretItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesSecretItems[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesSecretItemsOutputReference {
    return new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesSecretItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesSecret {
  /**
  * defaultMode is Optional: mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#default_mode DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#default_mode}
  */
  readonly defaultMode?: number;
  /**
  * items If unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#items DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#items}
  */
  readonly items?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesSecretItems[] | cdktf.IResolvable;
  /**
  * optional field specify whether the Secret or its keys must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#optional DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * secretName is the name of the secret in the pod's namespace to use. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#secret_name DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#secret_name}
  */
  readonly secretName?: string;
}

export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesSecretToTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_mode: cdktf.numberToTerraform(struct!.defaultMode),
    items: cdktf.listMapper(dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesSecretItemsToTerraform, false)(struct!.items),
    optional: cdktf.booleanToTerraform(struct!.optional),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesSecretToHclTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_mode: {
      value: cdktf.numberToHclTerraform(struct!.defaultMode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    items: {
      value: cdktf.listMapperHcl(dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesSecretItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesSecretItemsList",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    secret_name: {
      value: cdktf.stringToHclTerraform(struct!.secretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultMode = this._defaultMode;
    }
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultMode = undefined;
      this._items.internalValue = undefined;
      this._optional = undefined;
      this._secretName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultMode = value.defaultMode;
      this._items.internalValue = value.items;
      this._optional = value.optional;
      this._secretName = value.secretName;
    }
  }

  // default_mode - computed: false, optional: true, required: false
  private _defaultMode?: number; 
  public get defaultMode() {
    return this.getNumberAttribute('default_mode');
  }
  public set defaultMode(value: number) {
    this._defaultMode = value;
  }
  public resetDefaultMode() {
    this._defaultMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultModeInput() {
    return this._defaultMode;
  }

  // items - computed: false, optional: true, required: false
  private _items = new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesSecretItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesSecretItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }

  // secret_name - computed: false, optional: true, required: false
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  public resetSecretName() {
    this._secretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }
}
export interface DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesStorageosSecretRef {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#name DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesStorageosSecretRefToTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesStorageosSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesStorageosSecretRefToHclTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesStorageosSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesStorageosSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesStorageosSecretRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesStorageosSecretRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesStorageos {
  /**
  * fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#fs_type DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#read_only DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * secretRef specifies the secret to use for obtaining the StorageOS API credentials. If not specified, default values will be attempted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#secret_ref DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesStorageosSecretRef;
  /**
  * volumeName is the human-readable name of the StorageOS volume. Volume names are only unique within a namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#volume_name DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#volume_name}
  */
  readonly volumeName?: string;
  /**
  * volumeNamespace specifies the scope of the volume within StorageOS. If no namespace is specified then the Pod's namespace will be used. This allows the Kubernetes name scoping to be mirrored within StorageOS for tighter integration. Set VolumeName to any name to override the default behaviour. Set to 'default' if you are not using namespaces within StorageOS. Namespaces that do not pre-exist within StorageOS will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#volume_namespace DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#volume_namespace}
  */
  readonly volumeNamespace?: string;
}

export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesStorageosToTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesStorageos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_ref: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesStorageosSecretRefToTerraform(struct!.secretRef),
    volume_name: cdktf.stringToTerraform(struct!.volumeName),
    volume_namespace: cdktf.stringToTerraform(struct!.volumeNamespace),
  }
}


export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesStorageosToHclTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesStorageos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fs_type: {
      value: cdktf.stringToHclTerraform(struct!.fsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    secret_ref: {
      value: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesStorageosSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesStorageosSecretRef",
    },
    volume_name: {
      value: cdktf.stringToHclTerraform(struct!.volumeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_namespace: {
      value: cdktf.stringToHclTerraform(struct!.volumeNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesStorageosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesStorageos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    if (this._volumeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeName = this._volumeName;
    }
    if (this._volumeNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeNamespace = this._volumeNamespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesStorageos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fsType = undefined;
      this._readOnly = undefined;
      this._secretRef.internalValue = undefined;
      this._volumeName = undefined;
      this._volumeNamespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fsType = value.fsType;
      this._readOnly = value.readOnly;
      this._secretRef.internalValue = value.secretRef;
      this._volumeName = value.volumeName;
      this._volumeNamespace = value.volumeNamespace;
    }
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // secret_ref - computed: false, optional: true, required: false
  private _secretRef = new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesStorageosSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesStorageosSecretRef) {
    this._secretRef.internalValue = value;
  }
  public resetSecretRef() {
    this._secretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }

  // volume_name - computed: false, optional: true, required: false
  private _volumeName?: string; 
  public get volumeName() {
    return this.getStringAttribute('volume_name');
  }
  public set volumeName(value: string) {
    this._volumeName = value;
  }
  public resetVolumeName() {
    this._volumeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeNameInput() {
    return this._volumeName;
  }

  // volume_namespace - computed: false, optional: true, required: false
  private _volumeNamespace?: string; 
  public get volumeNamespace() {
    return this.getStringAttribute('volume_namespace');
  }
  public set volumeNamespace(value: string) {
    this._volumeNamespace = value;
  }
  public resetVolumeNamespace() {
    this._volumeNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeNamespaceInput() {
    return this._volumeNamespace;
  }
}
export interface DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesVsphereVolume {
  /**
  * fsType is filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#fs_type DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * storagePolicyID is the storage Policy Based Management (SPBM) profile ID associated with the StoragePolicyName.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#storage_policy_id DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#storage_policy_id}
  */
  readonly storagePolicyId?: string;
  /**
  * storagePolicyName is the storage Policy Based Management (SPBM) profile name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#storage_policy_name DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#storage_policy_name}
  */
  readonly storagePolicyName?: string;
  /**
  * volumePath is the path that identifies vSphere volume vmdk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#volume_path DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#volume_path}
  */
  readonly volumePath: string;
}

export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesVsphereVolumeToTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesVsphereVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    storage_policy_id: cdktf.stringToTerraform(struct!.storagePolicyId),
    storage_policy_name: cdktf.stringToTerraform(struct!.storagePolicyName),
    volume_path: cdktf.stringToTerraform(struct!.volumePath),
  }
}


export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesVsphereVolumeToHclTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesVsphereVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fs_type: {
      value: cdktf.stringToHclTerraform(struct!.fsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_policy_id: {
      value: cdktf.stringToHclTerraform(struct!.storagePolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_policy_name: {
      value: cdktf.stringToHclTerraform(struct!.storagePolicyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_path: {
      value: cdktf.stringToHclTerraform(struct!.volumePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesVsphereVolumeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesVsphereVolume | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._storagePolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.storagePolicyId = this._storagePolicyId;
    }
    if (this._storagePolicyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storagePolicyName = this._storagePolicyName;
    }
    if (this._volumePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumePath = this._volumePath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesVsphereVolume | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fsType = undefined;
      this._storagePolicyId = undefined;
      this._storagePolicyName = undefined;
      this._volumePath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fsType = value.fsType;
      this._storagePolicyId = value.storagePolicyId;
      this._storagePolicyName = value.storagePolicyName;
      this._volumePath = value.volumePath;
    }
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
  }

  // storage_policy_id - computed: false, optional: true, required: false
  private _storagePolicyId?: string; 
  public get storagePolicyId() {
    return this.getStringAttribute('storage_policy_id');
  }
  public set storagePolicyId(value: string) {
    this._storagePolicyId = value;
  }
  public resetStoragePolicyId() {
    this._storagePolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storagePolicyIdInput() {
    return this._storagePolicyId;
  }

  // storage_policy_name - computed: false, optional: true, required: false
  private _storagePolicyName?: string; 
  public get storagePolicyName() {
    return this.getStringAttribute('storage_policy_name');
  }
  public set storagePolicyName(value: string) {
    this._storagePolicyName = value;
  }
  public resetStoragePolicyName() {
    this._storagePolicyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storagePolicyNameInput() {
    return this._storagePolicyName;
  }

  // volume_path - computed: false, optional: false, required: true
  private _volumePath?: string; 
  public get volumePath() {
    return this.getStringAttribute('volume_path');
  }
  public set volumePath(value: string) {
    this._volumePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumePathInput() {
    return this._volumePath;
  }
}
export interface DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumes {
  /**
  * awsElasticBlockStore represents an AWS Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#aws_elastic_block_store DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#aws_elastic_block_store}
  */
  readonly awsElasticBlockStore?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesAwsElasticBlockStore;
  /**
  * azureDisk represents an Azure Data Disk mount on the host and bind mount to the pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#azure_disk DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#azure_disk}
  */
  readonly azureDisk?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesAzureDisk;
  /**
  * azureFile represents an Azure File Service mount on the host and bind mount to the pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#azure_file DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#azure_file}
  */
  readonly azureFile?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesAzureFile;
  /**
  * cephFS represents a Ceph FS mount on the host that shares a pod's lifetime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#cephfs DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#cephfs}
  */
  readonly cephfs?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesCephfs;
  /**
  * cinder represents a cinder volume attached and mounted on kubelets host machine. More info: https://examples.k8s.io/mysql-cinder-pd/README.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#cinder DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#cinder}
  */
  readonly cinder?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesCinder;
  /**
  * configMap represents a configMap that should populate this volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#config_map DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#config_map}
  */
  readonly configMap?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesConfigMap;
  /**
  * csi (Container Storage Interface) represents ephemeral storage that is handled by certain external CSI drivers (Beta feature).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#csi DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#csi}
  */
  readonly csi?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesCsi;
  /**
  * downwardAPI represents downward API about the pod that should populate this volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#downward_api DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#downward_api}
  */
  readonly downwardApi?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesDownwardApi;
  /**
  * emptyDir represents a temporary directory that shares a pod's lifetime. More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#empty_dir DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#empty_dir}
  */
  readonly emptyDir?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEmptyDir;
  /**
  * ephemeral represents a volume that is handled by a cluster storage driver. The volume's lifecycle is tied to the pod that defines it - it will be created before the pod starts, and deleted when the pod is removed. Use this if: a) the volume is only needed while the pod runs, b) features of normal volumes like restoring from snapshot or capacity tracking are needed, c) the storage driver is specified through a storage class, and d) the storage driver supports dynamic volume provisioning through a PersistentVolumeClaim (see EphemeralVolumeSource for more information on the connection between this volume type and PersistentVolumeClaim). Use PersistentVolumeClaim or one of the vendor-specific APIs for volumes that persist for longer than the lifecycle of an individual pod. Use CSI for light-weight local ephemeral volumes if the CSI driver is meant to be used that way - see the documentation of the driver for more information. A pod can use both types of ephemeral volumes and persistent volumes at the same time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#ephemeral DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#ephemeral}
  */
  readonly ephemeral?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeral;
  /**
  * fc represents a Fibre Channel resource that is attached to a kubelet's host machine and then exposed to the pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#fc DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#fc}
  */
  readonly fc?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesFc;
  /**
  * flexVolume represents a generic volume resource that is provisioned/attached using an exec based plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#flex_volume DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#flex_volume}
  */
  readonly flexVolume?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesFlexVolume;
  /**
  * flocker represents a Flocker volume attached to a kubelet's host machine. This depends on the Flocker control service being running
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#flocker DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#flocker}
  */
  readonly flocker?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesFlocker;
  /**
  * gcePersistentDisk represents a GCE Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#gce_persistent_disk DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#gce_persistent_disk}
  */
  readonly gcePersistentDisk?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesGcePersistentDisk;
  /**
  * gitRepo represents a git repository at a particular revision. DEPRECATED: GitRepo is deprecated. To provision a container with a git repo, mount an EmptyDir into an InitContainer that clones the repo using git, then mount the EmptyDir into the Pod's container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#git_repo DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#git_repo}
  */
  readonly gitRepo?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesGitRepo;
  /**
  * glusterfs represents a Glusterfs mount on the host that shares a pod's lifetime. More info: https://examples.k8s.io/volumes/glusterfs/README.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#glusterfs DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#glusterfs}
  */
  readonly glusterfs?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesGlusterfs;
  /**
  * hostPath represents a pre-existing file or directory on the host machine that is directly exposed to the container. This is generally used for system agents or other privileged things that are allowed to see the host machine. Most containers will NOT need this. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath --- TODO(jonesdl) We need to restrict who can use host directory mounts and who can/can not mount host directories as read/write.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#host_path DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#host_path}
  */
  readonly hostPath?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesHostPath;
  /**
  * iscsi represents an ISCSI Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://examples.k8s.io/volumes/iscsi/README.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#iscsi DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#iscsi}
  */
  readonly iscsi?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesIscsi;
  /**
  * name of the volume. Must be a DNS_LABEL and unique within the pod. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#name DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * nfs represents an NFS mount on the host that shares a pod's lifetime More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#nfs DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#nfs}
  */
  readonly nfs?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesNfs;
  /**
  * persistentVolumeClaimVolumeSource represents a reference to a PersistentVolumeClaim in the same namespace. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#persistent_volume_claim DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#persistent_volume_claim}
  */
  readonly persistentVolumeClaim?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesPersistentVolumeClaim;
  /**
  * photonPersistentDisk represents a PhotonController persistent disk attached and mounted on kubelets host machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#photon_persistent_disk DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#photon_persistent_disk}
  */
  readonly photonPersistentDisk?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesPhotonPersistentDisk;
  /**
  * portworxVolume represents a portworx volume attached and mounted on kubelets host machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#portworx_volume DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#portworx_volume}
  */
  readonly portworxVolume?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesPortworxVolume;
  /**
  * projected items for all in one resources secrets, configmaps, and downward API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#projected DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#projected}
  */
  readonly projected?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjected;
  /**
  * quobyte represents a Quobyte mount on the host that shares a pod's lifetime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#quobyte DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#quobyte}
  */
  readonly quobyte?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesQuobyte;
  /**
  * rbd represents a Rados Block Device mount on the host that shares a pod's lifetime. More info: https://examples.k8s.io/volumes/rbd/README.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#rbd DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#rbd}
  */
  readonly rbd?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesRbd;
  /**
  * scaleIO represents a ScaleIO persistent volume attached and mounted on Kubernetes nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#scale_io DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#scale_io}
  */
  readonly scaleIo?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesScaleIo;
  /**
  * secret represents a secret that should populate this volume. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#secret DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#secret}
  */
  readonly secret?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesSecret;
  /**
  * storageOS represents a StorageOS volume attached and mounted on Kubernetes nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#storageos DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#storageos}
  */
  readonly storageos?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesStorageos;
  /**
  * vsphereVolume represents a vSphere volume attached and mounted on kubelets host machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#vsphere_volume DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#vsphere_volume}
  */
  readonly vsphereVolume?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesVsphereVolume;
}

export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesToTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_elastic_block_store: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesAwsElasticBlockStoreToTerraform(struct!.awsElasticBlockStore),
    azure_disk: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesAzureDiskToTerraform(struct!.azureDisk),
    azure_file: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesAzureFileToTerraform(struct!.azureFile),
    cephfs: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesCephfsToTerraform(struct!.cephfs),
    cinder: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesCinderToTerraform(struct!.cinder),
    config_map: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesConfigMapToTerraform(struct!.configMap),
    csi: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesCsiToTerraform(struct!.csi),
    downward_api: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesDownwardApiToTerraform(struct!.downwardApi),
    empty_dir: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEmptyDirToTerraform(struct!.emptyDir),
    ephemeral: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralToTerraform(struct!.ephemeral),
    fc: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesFcToTerraform(struct!.fc),
    flex_volume: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesFlexVolumeToTerraform(struct!.flexVolume),
    flocker: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesFlockerToTerraform(struct!.flocker),
    gce_persistent_disk: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesGcePersistentDiskToTerraform(struct!.gcePersistentDisk),
    git_repo: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesGitRepoToTerraform(struct!.gitRepo),
    glusterfs: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesGlusterfsToTerraform(struct!.glusterfs),
    host_path: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesHostPathToTerraform(struct!.hostPath),
    iscsi: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesIscsiToTerraform(struct!.iscsi),
    name: cdktf.stringToTerraform(struct!.name),
    nfs: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesNfsToTerraform(struct!.nfs),
    persistent_volume_claim: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesPersistentVolumeClaimToTerraform(struct!.persistentVolumeClaim),
    photon_persistent_disk: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesPhotonPersistentDiskToTerraform(struct!.photonPersistentDisk),
    portworx_volume: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesPortworxVolumeToTerraform(struct!.portworxVolume),
    projected: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedToTerraform(struct!.projected),
    quobyte: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesQuobyteToTerraform(struct!.quobyte),
    rbd: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesRbdToTerraform(struct!.rbd),
    scale_io: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesScaleIoToTerraform(struct!.scaleIo),
    secret: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesSecretToTerraform(struct!.secret),
    storageos: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesStorageosToTerraform(struct!.storageos),
    vsphere_volume: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesVsphereVolumeToTerraform(struct!.vsphereVolume),
  }
}


export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesToHclTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_elastic_block_store: {
      value: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesAwsElasticBlockStoreToHclTerraform(struct!.awsElasticBlockStore),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesAwsElasticBlockStore",
    },
    azure_disk: {
      value: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesAzureDiskToHclTerraform(struct!.azureDisk),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesAzureDisk",
    },
    azure_file: {
      value: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesAzureFileToHclTerraform(struct!.azureFile),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesAzureFile",
    },
    cephfs: {
      value: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesCephfsToHclTerraform(struct!.cephfs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesCephfs",
    },
    cinder: {
      value: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesCinderToHclTerraform(struct!.cinder),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesCinder",
    },
    config_map: {
      value: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesConfigMapToHclTerraform(struct!.configMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesConfigMap",
    },
    csi: {
      value: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesCsiToHclTerraform(struct!.csi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesCsi",
    },
    downward_api: {
      value: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesDownwardApiToHclTerraform(struct!.downwardApi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesDownwardApi",
    },
    empty_dir: {
      value: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEmptyDirToHclTerraform(struct!.emptyDir),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEmptyDir",
    },
    ephemeral: {
      value: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralToHclTerraform(struct!.ephemeral),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeral",
    },
    fc: {
      value: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesFcToHclTerraform(struct!.fc),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesFc",
    },
    flex_volume: {
      value: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesFlexVolumeToHclTerraform(struct!.flexVolume),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesFlexVolume",
    },
    flocker: {
      value: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesFlockerToHclTerraform(struct!.flocker),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesFlocker",
    },
    gce_persistent_disk: {
      value: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesGcePersistentDiskToHclTerraform(struct!.gcePersistentDisk),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesGcePersistentDisk",
    },
    git_repo: {
      value: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesGitRepoToHclTerraform(struct!.gitRepo),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesGitRepo",
    },
    glusterfs: {
      value: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesGlusterfsToHclTerraform(struct!.glusterfs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesGlusterfs",
    },
    host_path: {
      value: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesHostPathToHclTerraform(struct!.hostPath),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesHostPath",
    },
    iscsi: {
      value: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesIscsiToHclTerraform(struct!.iscsi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesIscsi",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nfs: {
      value: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesNfsToHclTerraform(struct!.nfs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesNfs",
    },
    persistent_volume_claim: {
      value: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesPersistentVolumeClaimToHclTerraform(struct!.persistentVolumeClaim),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesPersistentVolumeClaim",
    },
    photon_persistent_disk: {
      value: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesPhotonPersistentDiskToHclTerraform(struct!.photonPersistentDisk),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesPhotonPersistentDisk",
    },
    portworx_volume: {
      value: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesPortworxVolumeToHclTerraform(struct!.portworxVolume),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesPortworxVolume",
    },
    projected: {
      value: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedToHclTerraform(struct!.projected),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjected",
    },
    quobyte: {
      value: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesQuobyteToHclTerraform(struct!.quobyte),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesQuobyte",
    },
    rbd: {
      value: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesRbdToHclTerraform(struct!.rbd),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesRbd",
    },
    scale_io: {
      value: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesScaleIoToHclTerraform(struct!.scaleIo),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesScaleIo",
    },
    secret: {
      value: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesSecret",
    },
    storageos: {
      value: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesStorageosToHclTerraform(struct!.storageos),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesStorageos",
    },
    vsphere_volume: {
      value: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesVsphereVolumeToHclTerraform(struct!.vsphereVolume),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesVsphereVolume",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsElasticBlockStore?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsElasticBlockStore = this._awsElasticBlockStore?.internalValue;
    }
    if (this._azureDisk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureDisk = this._azureDisk?.internalValue;
    }
    if (this._azureFile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureFile = this._azureFile?.internalValue;
    }
    if (this._cephfs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cephfs = this._cephfs?.internalValue;
    }
    if (this._cinder?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cinder = this._cinder?.internalValue;
    }
    if (this._configMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMap = this._configMap?.internalValue;
    }
    if (this._csi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.csi = this._csi?.internalValue;
    }
    if (this._downwardApi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.downwardApi = this._downwardApi?.internalValue;
    }
    if (this._emptyDir?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.emptyDir = this._emptyDir?.internalValue;
    }
    if (this._ephemeral?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ephemeral = this._ephemeral?.internalValue;
    }
    if (this._fc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fc = this._fc?.internalValue;
    }
    if (this._flexVolume?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.flexVolume = this._flexVolume?.internalValue;
    }
    if (this._flocker?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.flocker = this._flocker?.internalValue;
    }
    if (this._gcePersistentDisk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcePersistentDisk = this._gcePersistentDisk?.internalValue;
    }
    if (this._gitRepo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gitRepo = this._gitRepo?.internalValue;
    }
    if (this._glusterfs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.glusterfs = this._glusterfs?.internalValue;
    }
    if (this._hostPath?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostPath = this._hostPath?.internalValue;
    }
    if (this._iscsi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iscsi = this._iscsi?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nfs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nfs = this._nfs?.internalValue;
    }
    if (this._persistentVolumeClaim?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistentVolumeClaim = this._persistentVolumeClaim?.internalValue;
    }
    if (this._photonPersistentDisk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.photonPersistentDisk = this._photonPersistentDisk?.internalValue;
    }
    if (this._portworxVolume?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portworxVolume = this._portworxVolume?.internalValue;
    }
    if (this._projected?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.projected = this._projected?.internalValue;
    }
    if (this._quobyte?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.quobyte = this._quobyte?.internalValue;
    }
    if (this._rbd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rbd = this._rbd?.internalValue;
    }
    if (this._scaleIo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleIo = this._scaleIo?.internalValue;
    }
    if (this._secret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret?.internalValue;
    }
    if (this._storageos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageos = this._storageos?.internalValue;
    }
    if (this._vsphereVolume?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsphereVolume = this._vsphereVolume?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsElasticBlockStore.internalValue = undefined;
      this._azureDisk.internalValue = undefined;
      this._azureFile.internalValue = undefined;
      this._cephfs.internalValue = undefined;
      this._cinder.internalValue = undefined;
      this._configMap.internalValue = undefined;
      this._csi.internalValue = undefined;
      this._downwardApi.internalValue = undefined;
      this._emptyDir.internalValue = undefined;
      this._ephemeral.internalValue = undefined;
      this._fc.internalValue = undefined;
      this._flexVolume.internalValue = undefined;
      this._flocker.internalValue = undefined;
      this._gcePersistentDisk.internalValue = undefined;
      this._gitRepo.internalValue = undefined;
      this._glusterfs.internalValue = undefined;
      this._hostPath.internalValue = undefined;
      this._iscsi.internalValue = undefined;
      this._name = undefined;
      this._nfs.internalValue = undefined;
      this._persistentVolumeClaim.internalValue = undefined;
      this._photonPersistentDisk.internalValue = undefined;
      this._portworxVolume.internalValue = undefined;
      this._projected.internalValue = undefined;
      this._quobyte.internalValue = undefined;
      this._rbd.internalValue = undefined;
      this._scaleIo.internalValue = undefined;
      this._secret.internalValue = undefined;
      this._storageos.internalValue = undefined;
      this._vsphereVolume.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsElasticBlockStore.internalValue = value.awsElasticBlockStore;
      this._azureDisk.internalValue = value.azureDisk;
      this._azureFile.internalValue = value.azureFile;
      this._cephfs.internalValue = value.cephfs;
      this._cinder.internalValue = value.cinder;
      this._configMap.internalValue = value.configMap;
      this._csi.internalValue = value.csi;
      this._downwardApi.internalValue = value.downwardApi;
      this._emptyDir.internalValue = value.emptyDir;
      this._ephemeral.internalValue = value.ephemeral;
      this._fc.internalValue = value.fc;
      this._flexVolume.internalValue = value.flexVolume;
      this._flocker.internalValue = value.flocker;
      this._gcePersistentDisk.internalValue = value.gcePersistentDisk;
      this._gitRepo.internalValue = value.gitRepo;
      this._glusterfs.internalValue = value.glusterfs;
      this._hostPath.internalValue = value.hostPath;
      this._iscsi.internalValue = value.iscsi;
      this._name = value.name;
      this._nfs.internalValue = value.nfs;
      this._persistentVolumeClaim.internalValue = value.persistentVolumeClaim;
      this._photonPersistentDisk.internalValue = value.photonPersistentDisk;
      this._portworxVolume.internalValue = value.portworxVolume;
      this._projected.internalValue = value.projected;
      this._quobyte.internalValue = value.quobyte;
      this._rbd.internalValue = value.rbd;
      this._scaleIo.internalValue = value.scaleIo;
      this._secret.internalValue = value.secret;
      this._storageos.internalValue = value.storageos;
      this._vsphereVolume.internalValue = value.vsphereVolume;
    }
  }

  // aws_elastic_block_store - computed: false, optional: true, required: false
  private _awsElasticBlockStore = new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesAwsElasticBlockStoreOutputReference(this, "aws_elastic_block_store");
  public get awsElasticBlockStore() {
    return this._awsElasticBlockStore;
  }
  public putAwsElasticBlockStore(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesAwsElasticBlockStore) {
    this._awsElasticBlockStore.internalValue = value;
  }
  public resetAwsElasticBlockStore() {
    this._awsElasticBlockStore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsElasticBlockStoreInput() {
    return this._awsElasticBlockStore.internalValue;
  }

  // azure_disk - computed: false, optional: true, required: false
  private _azureDisk = new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesAzureDiskOutputReference(this, "azure_disk");
  public get azureDisk() {
    return this._azureDisk;
  }
  public putAzureDisk(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesAzureDisk) {
    this._azureDisk.internalValue = value;
  }
  public resetAzureDisk() {
    this._azureDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureDiskInput() {
    return this._azureDisk.internalValue;
  }

  // azure_file - computed: false, optional: true, required: false
  private _azureFile = new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesAzureFileOutputReference(this, "azure_file");
  public get azureFile() {
    return this._azureFile;
  }
  public putAzureFile(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesAzureFile) {
    this._azureFile.internalValue = value;
  }
  public resetAzureFile() {
    this._azureFile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureFileInput() {
    return this._azureFile.internalValue;
  }

  // cephfs - computed: false, optional: true, required: false
  private _cephfs = new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesCephfsOutputReference(this, "cephfs");
  public get cephfs() {
    return this._cephfs;
  }
  public putCephfs(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesCephfs) {
    this._cephfs.internalValue = value;
  }
  public resetCephfs() {
    this._cephfs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cephfsInput() {
    return this._cephfs.internalValue;
  }

  // cinder - computed: false, optional: true, required: false
  private _cinder = new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesCinderOutputReference(this, "cinder");
  public get cinder() {
    return this._cinder;
  }
  public putCinder(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesCinder) {
    this._cinder.internalValue = value;
  }
  public resetCinder() {
    this._cinder.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cinderInput() {
    return this._cinder.internalValue;
  }

  // config_map - computed: false, optional: true, required: false
  private _configMap = new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesConfigMapOutputReference(this, "config_map");
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesConfigMap) {
    this._configMap.internalValue = value;
  }
  public resetConfigMap() {
    this._configMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapInput() {
    return this._configMap.internalValue;
  }

  // csi - computed: false, optional: true, required: false
  private _csi = new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesCsiOutputReference(this, "csi");
  public get csi() {
    return this._csi;
  }
  public putCsi(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesCsi) {
    this._csi.internalValue = value;
  }
  public resetCsi() {
    this._csi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csiInput() {
    return this._csi.internalValue;
  }

  // downward_api - computed: false, optional: true, required: false
  private _downwardApi = new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesDownwardApiOutputReference(this, "downward_api");
  public get downwardApi() {
    return this._downwardApi;
  }
  public putDownwardApi(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesDownwardApi) {
    this._downwardApi.internalValue = value;
  }
  public resetDownwardApi() {
    this._downwardApi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downwardApiInput() {
    return this._downwardApi.internalValue;
  }

  // empty_dir - computed: false, optional: true, required: false
  private _emptyDir = new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEmptyDirOutputReference(this, "empty_dir");
  public get emptyDir() {
    return this._emptyDir;
  }
  public putEmptyDir(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEmptyDir) {
    this._emptyDir.internalValue = value;
  }
  public resetEmptyDir() {
    this._emptyDir.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emptyDirInput() {
    return this._emptyDir.internalValue;
  }

  // ephemeral - computed: false, optional: true, required: false
  private _ephemeral = new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeralOutputReference(this, "ephemeral");
  public get ephemeral() {
    return this._ephemeral;
  }
  public putEphemeral(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesEphemeral) {
    this._ephemeral.internalValue = value;
  }
  public resetEphemeral() {
    this._ephemeral.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ephemeralInput() {
    return this._ephemeral.internalValue;
  }

  // fc - computed: false, optional: true, required: false
  private _fc = new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesFcOutputReference(this, "fc");
  public get fc() {
    return this._fc;
  }
  public putFc(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesFc) {
    this._fc.internalValue = value;
  }
  public resetFc() {
    this._fc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fcInput() {
    return this._fc.internalValue;
  }

  // flex_volume - computed: false, optional: true, required: false
  private _flexVolume = new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesFlexVolumeOutputReference(this, "flex_volume");
  public get flexVolume() {
    return this._flexVolume;
  }
  public putFlexVolume(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesFlexVolume) {
    this._flexVolume.internalValue = value;
  }
  public resetFlexVolume() {
    this._flexVolume.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flexVolumeInput() {
    return this._flexVolume.internalValue;
  }

  // flocker - computed: false, optional: true, required: false
  private _flocker = new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesFlockerOutputReference(this, "flocker");
  public get flocker() {
    return this._flocker;
  }
  public putFlocker(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesFlocker) {
    this._flocker.internalValue = value;
  }
  public resetFlocker() {
    this._flocker.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flockerInput() {
    return this._flocker.internalValue;
  }

  // gce_persistent_disk - computed: false, optional: true, required: false
  private _gcePersistentDisk = new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesGcePersistentDiskOutputReference(this, "gce_persistent_disk");
  public get gcePersistentDisk() {
    return this._gcePersistentDisk;
  }
  public putGcePersistentDisk(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesGcePersistentDisk) {
    this._gcePersistentDisk.internalValue = value;
  }
  public resetGcePersistentDisk() {
    this._gcePersistentDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcePersistentDiskInput() {
    return this._gcePersistentDisk.internalValue;
  }

  // git_repo - computed: false, optional: true, required: false
  private _gitRepo = new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesGitRepoOutputReference(this, "git_repo");
  public get gitRepo() {
    return this._gitRepo;
  }
  public putGitRepo(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesGitRepo) {
    this._gitRepo.internalValue = value;
  }
  public resetGitRepo() {
    this._gitRepo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitRepoInput() {
    return this._gitRepo.internalValue;
  }

  // glusterfs - computed: false, optional: true, required: false
  private _glusterfs = new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesGlusterfsOutputReference(this, "glusterfs");
  public get glusterfs() {
    return this._glusterfs;
  }
  public putGlusterfs(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesGlusterfs) {
    this._glusterfs.internalValue = value;
  }
  public resetGlusterfs() {
    this._glusterfs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glusterfsInput() {
    return this._glusterfs.internalValue;
  }

  // host_path - computed: false, optional: true, required: false
  private _hostPath = new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesHostPathOutputReference(this, "host_path");
  public get hostPath() {
    return this._hostPath;
  }
  public putHostPath(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesHostPath) {
    this._hostPath.internalValue = value;
  }
  public resetHostPath() {
    this._hostPath.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostPathInput() {
    return this._hostPath.internalValue;
  }

  // iscsi - computed: false, optional: true, required: false
  private _iscsi = new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesIscsiOutputReference(this, "iscsi");
  public get iscsi() {
    return this._iscsi;
  }
  public putIscsi(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesIscsi) {
    this._iscsi.internalValue = value;
  }
  public resetIscsi() {
    this._iscsi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iscsiInput() {
    return this._iscsi.internalValue;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // nfs - computed: false, optional: true, required: false
  private _nfs = new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesNfsOutputReference(this, "nfs");
  public get nfs() {
    return this._nfs;
  }
  public putNfs(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesNfs) {
    this._nfs.internalValue = value;
  }
  public resetNfs() {
    this._nfs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nfsInput() {
    return this._nfs.internalValue;
  }

  // persistent_volume_claim - computed: false, optional: true, required: false
  private _persistentVolumeClaim = new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesPersistentVolumeClaimOutputReference(this, "persistent_volume_claim");
  public get persistentVolumeClaim() {
    return this._persistentVolumeClaim;
  }
  public putPersistentVolumeClaim(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesPersistentVolumeClaim) {
    this._persistentVolumeClaim.internalValue = value;
  }
  public resetPersistentVolumeClaim() {
    this._persistentVolumeClaim.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentVolumeClaimInput() {
    return this._persistentVolumeClaim.internalValue;
  }

  // photon_persistent_disk - computed: false, optional: true, required: false
  private _photonPersistentDisk = new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesPhotonPersistentDiskOutputReference(this, "photon_persistent_disk");
  public get photonPersistentDisk() {
    return this._photonPersistentDisk;
  }
  public putPhotonPersistentDisk(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesPhotonPersistentDisk) {
    this._photonPersistentDisk.internalValue = value;
  }
  public resetPhotonPersistentDisk() {
    this._photonPersistentDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get photonPersistentDiskInput() {
    return this._photonPersistentDisk.internalValue;
  }

  // portworx_volume - computed: false, optional: true, required: false
  private _portworxVolume = new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesPortworxVolumeOutputReference(this, "portworx_volume");
  public get portworxVolume() {
    return this._portworxVolume;
  }
  public putPortworxVolume(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesPortworxVolume) {
    this._portworxVolume.internalValue = value;
  }
  public resetPortworxVolume() {
    this._portworxVolume.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portworxVolumeInput() {
    return this._portworxVolume.internalValue;
  }

  // projected - computed: false, optional: true, required: false
  private _projected = new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjectedOutputReference(this, "projected");
  public get projected() {
    return this._projected;
  }
  public putProjected(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesProjected) {
    this._projected.internalValue = value;
  }
  public resetProjected() {
    this._projected.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectedInput() {
    return this._projected.internalValue;
  }

  // quobyte - computed: false, optional: true, required: false
  private _quobyte = new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesQuobyteOutputReference(this, "quobyte");
  public get quobyte() {
    return this._quobyte;
  }
  public putQuobyte(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesQuobyte) {
    this._quobyte.internalValue = value;
  }
  public resetQuobyte() {
    this._quobyte.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quobyteInput() {
    return this._quobyte.internalValue;
  }

  // rbd - computed: false, optional: true, required: false
  private _rbd = new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesRbdOutputReference(this, "rbd");
  public get rbd() {
    return this._rbd;
  }
  public putRbd(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesRbd) {
    this._rbd.internalValue = value;
  }
  public resetRbd() {
    this._rbd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rbdInput() {
    return this._rbd.internalValue;
  }

  // scale_io - computed: false, optional: true, required: false
  private _scaleIo = new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesScaleIoOutputReference(this, "scale_io");
  public get scaleIo() {
    return this._scaleIo;
  }
  public putScaleIo(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesScaleIo) {
    this._scaleIo.internalValue = value;
  }
  public resetScaleIo() {
    this._scaleIo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleIoInput() {
    return this._scaleIo.internalValue;
  }

  // secret - computed: false, optional: true, required: false
  private _secret = new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesSecret) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }

  // storageos - computed: false, optional: true, required: false
  private _storageos = new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesStorageosOutputReference(this, "storageos");
  public get storageos() {
    return this._storageos;
  }
  public putStorageos(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesStorageos) {
    this._storageos.internalValue = value;
  }
  public resetStorageos() {
    this._storageos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageosInput() {
    return this._storageos.internalValue;
  }

  // vsphere_volume - computed: false, optional: true, required: false
  private _vsphereVolume = new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesVsphereVolumeOutputReference(this, "vsphere_volume");
  public get vsphereVolume() {
    return this._vsphereVolume;
  }
  public putVsphereVolume(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesVsphereVolume) {
    this._vsphereVolume.internalValue = value;
  }
  public resetVsphereVolume() {
    this._vsphereVolume.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsphereVolumeInput() {
    return this._vsphereVolume.internalValue;
  }
}

export class DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesList extends cdktf.ComplexList {
  public internalValue? : DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumes[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesOutputReference {
    return new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpec {
  /**
  * Optional duration in seconds the pod may be active on the node relative to StartTime before the system will actively try to mark it failed and kill associated containers. Value must be a positive integer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#active_deadline_seconds DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#active_deadline_seconds}
  */
  readonly activeDeadlineSeconds?: number;
  /**
  * If specified, the pod's scheduling constraints
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#affinity DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#affinity}
  */
  readonly affinity?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecAffinity;
  /**
  * AutomountServiceAccountToken indicates whether a service account token should be automatically mounted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#automount_service_account_token DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#automount_service_account_token}
  */
  readonly automountServiceAccountToken?: boolean | cdktf.IResolvable;
  /**
  * List of containers belonging to the pod. Containers cannot currently be added or removed. There must be at least one container in a Pod. Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#containers DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#containers}
  */
  readonly containers: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecContainers[] | cdktf.IResolvable;
  /**
  * Specifies the DNS parameters of a pod. Parameters specified here will be merged to the generated DNS configuration based on DNSPolicy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#dns_config DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#dns_config}
  */
  readonly dnsConfig?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecDnsConfig;
  /**
  * Set DNS policy for the pod. Defaults to 'ClusterFirst'. Valid values are 'ClusterFirstWithHostNet', 'ClusterFirst', 'Default' or 'None'. DNS parameters given in DNSConfig will be merged with the policy selected with DNSPolicy. To have DNS options set along with hostNetwork, you have to specify DNS policy explicitly to 'ClusterFirstWithHostNet'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#dns_policy DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#dns_policy}
  */
  readonly dnsPolicy?: string;
  /**
  * EnableServiceLinks indicates whether information about services should be injected into pod's environment variables, matching the syntax of Docker links. Optional: Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#enable_service_links DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#enable_service_links}
  */
  readonly enableServiceLinks?: boolean | cdktf.IResolvable;
  /**
  * List of ephemeral containers run in this pod. Ephemeral containers may be run in an existing pod to perform user-initiated actions such as debugging. This list cannot be specified when creating a pod, and it cannot be modified by updating the pod spec. In order to add an ephemeral container to an existing pod, use the pod's ephemeralcontainers subresource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#ephemeral_containers DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#ephemeral_containers}
  */
  readonly ephemeralContainers?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecEphemeralContainers[] | cdktf.IResolvable;
  /**
  * HostAliases is an optional list of hosts and IPs that will be injected into the pod's hosts file if specified. This is only valid for non-hostNetwork pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#host_aliases DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#host_aliases}
  */
  readonly hostAliases?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecHostAliases[] | cdktf.IResolvable;
  /**
  * Use the host's ipc namespace. Optional: Default to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#host_ipc DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#host_ipc}
  */
  readonly hostIpc?: boolean | cdktf.IResolvable;
  /**
  * Host networking requested for this pod. Use the host's network namespace. If this option is set, the ports that will be used must be specified. Default to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#host_network DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#host_network}
  */
  readonly hostNetwork?: boolean | cdktf.IResolvable;
  /**
  * Use the host's pid namespace. Optional: Default to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#host_pid DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#host_pid}
  */
  readonly hostPid?: boolean | cdktf.IResolvable;
  /**
  * Use the host's user namespace. Optional: Default to true. If set to true or not present, the pod will be run in the host user namespace, useful for when the pod needs a feature only available to the host user namespace, such as loading a kernel module with CAP_SYS_MODULE. When set to false, a new userns is created for the pod. Setting false is useful for mitigating container breakout vulnerabilities even allowing users to run their containers as root without actually having root privileges on the host. This field is alpha-level and is only honored by servers that enable the UserNamespacesSupport feature.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#host_users DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#host_users}
  */
  readonly hostUsers?: boolean | cdktf.IResolvable;
  /**
  * Specifies the hostname of the Pod If not specified, the pod's hostname will be set to a system-defined value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#hostname DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#hostname}
  */
  readonly hostname?: string;
  /**
  * ImagePullSecrets is an optional list of references to secrets in the same namespace to use for pulling any of the images used by this PodSpec. If specified, these secrets will be passed to individual puller implementations for them to use. More info: https://kubernetes.io/docs/concepts/containers/images#specifying-imagepullsecrets-on-a-pod
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#image_pull_secrets DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#image_pull_secrets}
  */
  readonly imagePullSecrets?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecImagePullSecrets[] | cdktf.IResolvable;
  /**
  * List of initialization containers belonging to the pod. Init containers are executed in order prior to containers being started. If any init container fails, the pod is considered to have failed and is handled according to its restartPolicy. The name for an init container or normal container must be unique among all containers. Init containers may not have Lifecycle actions, Readiness probes, Liveness probes, or Startup probes. The resourceRequirements of an init container are taken into account during scheduling by finding the highest request/limit for each resource type, and then using the max of of that value or the sum of the normal containers. Limits are applied to init containers in a similar fashion. Init containers cannot currently be added or removed. Cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/init-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#init_containers DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#init_containers}
  */
  readonly initContainers?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainers[] | cdktf.IResolvable;
  /**
  * NodeName is a request to schedule this pod onto a specific node. If it is non-empty, the scheduler simply schedules this pod onto that node, assuming that it fits resource requirements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#node_name DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#node_name}
  */
  readonly nodeName?: string;
  /**
  * NodeSelector is a selector which must be true for the pod to fit on a node. Selector which must match a node's labels for the pod to be scheduled on that node. More info: https://kubernetes.io/docs/concepts/configuration/assign-pod-node/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#node_selector DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * Specifies the OS of the containers in the pod. Some pod and container fields are restricted if this is set. If the OS field is set to linux, the following fields must be unset: -securityContext.windowsOptions If the OS field is set to windows, following fields must be unset: - spec.hostPID - spec.hostIPC - spec.hostUsers - spec.securityContext.seLinuxOptions - spec.securityContext.seccompProfile - spec.securityContext.fsGroup - spec.securityContext.fsGroupChangePolicy - spec.securityContext.sysctls - spec.shareProcessNamespace - spec.securityContext.runAsUser - spec.securityContext.runAsGroup - spec.securityContext.supplementalGroups - spec.containers[*].securityContext.seLinuxOptions - spec.containers[*].securityContext.seccompProfile - spec.containers[*].securityContext.capabilities - spec.containers[*].securityContext.readOnlyRootFilesystem - spec.containers[*].securityContext.privileged - spec.containers[*].securityContext.allowPrivilegeEscalation - spec.containers[*].securityContext.procMount - spec.containers[*].securityContext.runAsUser - spec.containers[*].securityContext.runAsGroup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#os DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#os}
  */
  readonly os?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecOs;
  /**
  * Overhead represents the resource overhead associated with running a pod for a given RuntimeClass. This field will be autopopulated at admission time by the RuntimeClass admission controller. If the RuntimeClass admission controller is enabled, overhead must not be set in Pod create requests. The RuntimeClass admission controller will reject Pod create requests which have the overhead already set. If RuntimeClass is configured and selected in the PodSpec, Overhead will be set to the value defined in the corresponding RuntimeClass, otherwise it will remain unset and treated as zero. More info: https://git.k8s.io/enhancements/keps/sig-node/688-pod-overhead/README.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#overhead DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#overhead}
  */
  readonly overhead?: { [key: string]: string };
  /**
  * PreemptionPolicy is the Policy for preempting pods with lower priority. One of Never, PreemptLowerPriority. Defaults to PreemptLowerPriority if unset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#preemption_policy DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#preemption_policy}
  */
  readonly preemptionPolicy?: string;
  /**
  * The priority value. Various system components use this field to find the priority of the pod. When Priority Admission Controller is enabled, it prevents users from setting this field. The admission controller populates this field from PriorityClassName. The higher the value, the higher the priority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#priority DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#priority}
  */
  readonly priority?: number;
  /**
  * If specified, indicates the pod's priority. 'system-node-critical' and 'system-cluster-critical' are two special keywords which indicate the highest priorities with the former being the highest priority. Any other name must be defined by creating a PriorityClass object with that name. If not specified, the pod priority will be default or zero if there is no default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#priority_class_name DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#priority_class_name}
  */
  readonly priorityClassName?: string;
  /**
  * If specified, all readiness gates will be evaluated for pod readiness. A pod is ready when all its containers are ready AND all conditions specified in the readiness gates have status equal to 'True' More info: https://git.k8s.io/enhancements/keps/sig-network/580-pod-readiness-gates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#readiness_gates DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#readiness_gates}
  */
  readonly readinessGates?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecReadinessGates[] | cdktf.IResolvable;
  /**
  * ResourceClaims defines which ResourceClaims must be allocated and reserved before the Pod is allowed to start. The resources will be made available to those containers which consume them by name. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#resource_claims DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#resource_claims}
  */
  readonly resourceClaims?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecResourceClaims[] | cdktf.IResolvable;
  /**
  * Restart policy for all containers within the pod. One of Always, OnFailure, Never. In some contexts, only a subset of those values may be permitted. Default to Always. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#restart-policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#restart_policy DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#restart_policy}
  */
  readonly restartPolicy?: string;
  /**
  * RuntimeClassName refers to a RuntimeClass object in the node.k8s.io group, which should be used to run this pod. If no RuntimeClass resource matches the named class, the pod will not be run. If unset or empty, the 'legacy' RuntimeClass will be used, which is an implicit class with an empty definition that uses the default runtime handler. More info: https://git.k8s.io/enhancements/keps/sig-node/585-runtime-class
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#runtime_class_name DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#runtime_class_name}
  */
  readonly runtimeClassName?: string;
  /**
  * If specified, the pod will be dispatched by specified scheduler. If not specified, the pod will be dispatched by default scheduler.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#scheduler_name DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#scheduler_name}
  */
  readonly schedulerName?: string;
  /**
  * SchedulingGates is an opaque list of values that if specified will block scheduling the pod. If schedulingGates is not empty, the pod will stay in the SchedulingGated state and the scheduler will not attempt to schedule the pod. SchedulingGates can only be set at pod creation time, and be removed only afterwards. This is a beta feature enabled by the PodSchedulingReadiness feature gate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#scheduling_gates DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#scheduling_gates}
  */
  readonly schedulingGates?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecSchedulingGates[] | cdktf.IResolvable;
  /**
  * SecurityContext holds pod-level security attributes and common container settings. Optional: Defaults to empty. See type description for default values of each field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#security_context DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#security_context}
  */
  readonly securityContext?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecSecurityContext;
  /**
  * DeprecatedServiceAccount is a depreciated alias for ServiceAccountName. Deprecated: Use serviceAccountName instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#service_account DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * ServiceAccountName is the name of the ServiceAccount to use to run this pod. More info: https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#service_account_name DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#service_account_name}
  */
  readonly serviceAccountName?: string;
  /**
  * If true the pod's hostname will be configured as the pod's FQDN, rather than the leaf name (the default). In Linux containers, this means setting the FQDN in the hostname field of the kernel (the nodename field of struct utsname). In Windows containers, this means setting the registry value of hostname for the registry key HKEY_LOCAL_MACHINESYSTEMCurrentControlSetServicesTcpipParameters to FQDN. If a pod does not have FQDN, this has no effect. Default to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#set_hostname_as_fqdn DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#set_hostname_as_fqdn}
  */
  readonly setHostnameAsFqdn?: boolean | cdktf.IResolvable;
  /**
  * Share a single process namespace between all of the containers in a pod. When this is set containers will be able to view and signal processes from other containers in the same pod, and the first process in each container will not be assigned PID 1. HostPID and ShareProcessNamespace cannot both be set. Optional: Default to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#share_process_namespace DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#share_process_namespace}
  */
  readonly shareProcessNamespace?: boolean | cdktf.IResolvable;
  /**
  * If specified, the fully qualified Pod hostname will be '<hostname>.<subdomain>.<pod namespace>.svc.<cluster domain>'. If not specified, the pod will not have a domainname at all.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#subdomain DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#subdomain}
  */
  readonly subdomain?: string;
  /**
  * Optional duration in seconds the pod needs to terminate gracefully. May be decreased in delete request. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). If this value is nil, the default grace period will be used instead. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. Defaults to 30 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#termination_grace_period_seconds DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#termination_grace_period_seconds}
  */
  readonly terminationGracePeriodSeconds?: number;
  /**
  * If specified, the pod's tolerations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#tolerations DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#tolerations}
  */
  readonly tolerations?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecTolerations[] | cdktf.IResolvable;
  /**
  * TopologySpreadConstraints describes how a group of pods ought to spread across topology domains. Scheduler will schedule pods in a way which abides by the constraints. All topologySpreadConstraints are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#topology_spread_constraints DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#topology_spread_constraints}
  */
  readonly topologySpreadConstraints?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraints[] | cdktf.IResolvable;
  /**
  * List of volumes that can be mounted by containers belonging to the pod. More info: https://kubernetes.io/docs/concepts/storage/volumes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#volumes DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#volumes}
  */
  readonly volumes?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumes[] | cdktf.IResolvable;
}

export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecToTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_deadline_seconds: cdktf.numberToTerraform(struct!.activeDeadlineSeconds),
    affinity: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecAffinityToTerraform(struct!.affinity),
    automount_service_account_token: cdktf.booleanToTerraform(struct!.automountServiceAccountToken),
    containers: cdktf.listMapper(dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecContainersToTerraform, false)(struct!.containers),
    dns_config: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecDnsConfigToTerraform(struct!.dnsConfig),
    dns_policy: cdktf.stringToTerraform(struct!.dnsPolicy),
    enable_service_links: cdktf.booleanToTerraform(struct!.enableServiceLinks),
    ephemeral_containers: cdktf.listMapper(dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecEphemeralContainersToTerraform, false)(struct!.ephemeralContainers),
    host_aliases: cdktf.listMapper(dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecHostAliasesToTerraform, false)(struct!.hostAliases),
    host_ipc: cdktf.booleanToTerraform(struct!.hostIpc),
    host_network: cdktf.booleanToTerraform(struct!.hostNetwork),
    host_pid: cdktf.booleanToTerraform(struct!.hostPid),
    host_users: cdktf.booleanToTerraform(struct!.hostUsers),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    image_pull_secrets: cdktf.listMapper(dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecImagePullSecretsToTerraform, false)(struct!.imagePullSecrets),
    init_containers: cdktf.listMapper(dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersToTerraform, false)(struct!.initContainers),
    node_name: cdktf.stringToTerraform(struct!.nodeName),
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    os: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecOsToTerraform(struct!.os),
    overhead: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.overhead),
    preemption_policy: cdktf.stringToTerraform(struct!.preemptionPolicy),
    priority: cdktf.numberToTerraform(struct!.priority),
    priority_class_name: cdktf.stringToTerraform(struct!.priorityClassName),
    readiness_gates: cdktf.listMapper(dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecReadinessGatesToTerraform, false)(struct!.readinessGates),
    resource_claims: cdktf.listMapper(dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecResourceClaimsToTerraform, false)(struct!.resourceClaims),
    restart_policy: cdktf.stringToTerraform(struct!.restartPolicy),
    runtime_class_name: cdktf.stringToTerraform(struct!.runtimeClassName),
    scheduler_name: cdktf.stringToTerraform(struct!.schedulerName),
    scheduling_gates: cdktf.listMapper(dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecSchedulingGatesToTerraform, false)(struct!.schedulingGates),
    security_context: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecSecurityContextToTerraform(struct!.securityContext),
    service_account: cdktf.stringToTerraform(struct!.serviceAccount),
    service_account_name: cdktf.stringToTerraform(struct!.serviceAccountName),
    set_hostname_as_fqdn: cdktf.booleanToTerraform(struct!.setHostnameAsFqdn),
    share_process_namespace: cdktf.booleanToTerraform(struct!.shareProcessNamespace),
    subdomain: cdktf.stringToTerraform(struct!.subdomain),
    termination_grace_period_seconds: cdktf.numberToTerraform(struct!.terminationGracePeriodSeconds),
    tolerations: cdktf.listMapper(dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecTolerationsToTerraform, false)(struct!.tolerations),
    topology_spread_constraints: cdktf.listMapper(dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraintsToTerraform, false)(struct!.topologySpreadConstraints),
    volumes: cdktf.listMapper(dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesToTerraform, false)(struct!.volumes),
  }
}


export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecToHclTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active_deadline_seconds: {
      value: cdktf.numberToHclTerraform(struct!.activeDeadlineSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    affinity: {
      value: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecAffinityToHclTerraform(struct!.affinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecAffinity",
    },
    automount_service_account_token: {
      value: cdktf.booleanToHclTerraform(struct!.automountServiceAccountToken),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    containers: {
      value: cdktf.listMapperHcl(dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecContainersToHclTerraform, false)(struct!.containers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecContainersList",
    },
    dns_config: {
      value: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecDnsConfigToHclTerraform(struct!.dnsConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecDnsConfig",
    },
    dns_policy: {
      value: cdktf.stringToHclTerraform(struct!.dnsPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_service_links: {
      value: cdktf.booleanToHclTerraform(struct!.enableServiceLinks),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ephemeral_containers: {
      value: cdktf.listMapperHcl(dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecEphemeralContainersToHclTerraform, false)(struct!.ephemeralContainers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecEphemeralContainersList",
    },
    host_aliases: {
      value: cdktf.listMapperHcl(dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecHostAliasesToHclTerraform, false)(struct!.hostAliases),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecHostAliasesList",
    },
    host_ipc: {
      value: cdktf.booleanToHclTerraform(struct!.hostIpc),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    host_network: {
      value: cdktf.booleanToHclTerraform(struct!.hostNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    host_pid: {
      value: cdktf.booleanToHclTerraform(struct!.hostPid),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    host_users: {
      value: cdktf.booleanToHclTerraform(struct!.hostUsers),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_pull_secrets: {
      value: cdktf.listMapperHcl(dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecImagePullSecretsToHclTerraform, false)(struct!.imagePullSecrets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecImagePullSecretsList",
    },
    init_containers: {
      value: cdktf.listMapperHcl(dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersToHclTerraform, false)(struct!.initContainers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersList",
    },
    node_name: {
      value: cdktf.stringToHclTerraform(struct!.nodeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    os: {
      value: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecOsToHclTerraform(struct!.os),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecOs",
    },
    overhead: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.overhead),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    preemption_policy: {
      value: cdktf.stringToHclTerraform(struct!.preemptionPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority_class_name: {
      value: cdktf.stringToHclTerraform(struct!.priorityClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    readiness_gates: {
      value: cdktf.listMapperHcl(dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecReadinessGatesToHclTerraform, false)(struct!.readinessGates),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecReadinessGatesList",
    },
    resource_claims: {
      value: cdktf.listMapperHcl(dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecResourceClaimsToHclTerraform, false)(struct!.resourceClaims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecResourceClaimsList",
    },
    restart_policy: {
      value: cdktf.stringToHclTerraform(struct!.restartPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    runtime_class_name: {
      value: cdktf.stringToHclTerraform(struct!.runtimeClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scheduler_name: {
      value: cdktf.stringToHclTerraform(struct!.schedulerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scheduling_gates: {
      value: cdktf.listMapperHcl(dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecSchedulingGatesToHclTerraform, false)(struct!.schedulingGates),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecSchedulingGatesList",
    },
    security_context: {
      value: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecSecurityContextToHclTerraform(struct!.securityContext),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecSecurityContext",
    },
    service_account: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    set_hostname_as_fqdn: {
      value: cdktf.booleanToHclTerraform(struct!.setHostnameAsFqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    share_process_namespace: {
      value: cdktf.booleanToHclTerraform(struct!.shareProcessNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    subdomain: {
      value: cdktf.stringToHclTerraform(struct!.subdomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    termination_grace_period_seconds: {
      value: cdktf.numberToHclTerraform(struct!.terminationGracePeriodSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tolerations: {
      value: cdktf.listMapperHcl(dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecTolerationsToHclTerraform, false)(struct!.tolerations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecTolerationsList",
    },
    topology_spread_constraints: {
      value: cdktf.listMapperHcl(dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraintsToHclTerraform, false)(struct!.topologySpreadConstraints),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraintsList",
    },
    volumes: {
      value: cdktf.listMapperHcl(dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesToHclTerraform, false)(struct!.volumes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeDeadlineSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeDeadlineSeconds = this._activeDeadlineSeconds;
    }
    if (this._affinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.affinity = this._affinity?.internalValue;
    }
    if (this._automountServiceAccountToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.automountServiceAccountToken = this._automountServiceAccountToken;
    }
    if (this._containers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containers = this._containers?.internalValue;
    }
    if (this._dnsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsConfig = this._dnsConfig?.internalValue;
    }
    if (this._dnsPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsPolicy = this._dnsPolicy;
    }
    if (this._enableServiceLinks !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableServiceLinks = this._enableServiceLinks;
    }
    if (this._ephemeralContainers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ephemeralContainers = this._ephemeralContainers?.internalValue;
    }
    if (this._hostAliases?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostAliases = this._hostAliases?.internalValue;
    }
    if (this._hostIpc !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostIpc = this._hostIpc;
    }
    if (this._hostNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostNetwork = this._hostNetwork;
    }
    if (this._hostPid !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostPid = this._hostPid;
    }
    if (this._hostUsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostUsers = this._hostUsers;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._imagePullSecrets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullSecrets = this._imagePullSecrets?.internalValue;
    }
    if (this._initContainers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.initContainers = this._initContainers?.internalValue;
    }
    if (this._nodeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeName = this._nodeName;
    }
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._os?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.os = this._os?.internalValue;
    }
    if (this._overhead !== undefined) {
      hasAnyValues = true;
      internalValueResult.overhead = this._overhead;
    }
    if (this._preemptionPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.preemptionPolicy = this._preemptionPolicy;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._priorityClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityClassName = this._priorityClassName;
    }
    if (this._readinessGates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.readinessGates = this._readinessGates?.internalValue;
    }
    if (this._resourceClaims?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceClaims = this._resourceClaims?.internalValue;
    }
    if (this._restartPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.restartPolicy = this._restartPolicy;
    }
    if (this._runtimeClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeClassName = this._runtimeClassName;
    }
    if (this._schedulerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedulerName = this._schedulerName;
    }
    if (this._schedulingGates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedulingGates = this._schedulingGates?.internalValue;
    }
    if (this._securityContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityContext = this._securityContext?.internalValue;
    }
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    if (this._serviceAccountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountName = this._serviceAccountName;
    }
    if (this._setHostnameAsFqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.setHostnameAsFqdn = this._setHostnameAsFqdn;
    }
    if (this._shareProcessNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.shareProcessNamespace = this._shareProcessNamespace;
    }
    if (this._subdomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.subdomain = this._subdomain;
    }
    if (this._terminationGracePeriodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminationGracePeriodSeconds = this._terminationGracePeriodSeconds;
    }
    if (this._tolerations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerations = this._tolerations?.internalValue;
    }
    if (this._topologySpreadConstraints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologySpreadConstraints = this._topologySpreadConstraints?.internalValue;
    }
    if (this._volumes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumes = this._volumes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activeDeadlineSeconds = undefined;
      this._affinity.internalValue = undefined;
      this._automountServiceAccountToken = undefined;
      this._containers.internalValue = undefined;
      this._dnsConfig.internalValue = undefined;
      this._dnsPolicy = undefined;
      this._enableServiceLinks = undefined;
      this._ephemeralContainers.internalValue = undefined;
      this._hostAliases.internalValue = undefined;
      this._hostIpc = undefined;
      this._hostNetwork = undefined;
      this._hostPid = undefined;
      this._hostUsers = undefined;
      this._hostname = undefined;
      this._imagePullSecrets.internalValue = undefined;
      this._initContainers.internalValue = undefined;
      this._nodeName = undefined;
      this._nodeSelector = undefined;
      this._os.internalValue = undefined;
      this._overhead = undefined;
      this._preemptionPolicy = undefined;
      this._priority = undefined;
      this._priorityClassName = undefined;
      this._readinessGates.internalValue = undefined;
      this._resourceClaims.internalValue = undefined;
      this._restartPolicy = undefined;
      this._runtimeClassName = undefined;
      this._schedulerName = undefined;
      this._schedulingGates.internalValue = undefined;
      this._securityContext.internalValue = undefined;
      this._serviceAccount = undefined;
      this._serviceAccountName = undefined;
      this._setHostnameAsFqdn = undefined;
      this._shareProcessNamespace = undefined;
      this._subdomain = undefined;
      this._terminationGracePeriodSeconds = undefined;
      this._tolerations.internalValue = undefined;
      this._topologySpreadConstraints.internalValue = undefined;
      this._volumes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activeDeadlineSeconds = value.activeDeadlineSeconds;
      this._affinity.internalValue = value.affinity;
      this._automountServiceAccountToken = value.automountServiceAccountToken;
      this._containers.internalValue = value.containers;
      this._dnsConfig.internalValue = value.dnsConfig;
      this._dnsPolicy = value.dnsPolicy;
      this._enableServiceLinks = value.enableServiceLinks;
      this._ephemeralContainers.internalValue = value.ephemeralContainers;
      this._hostAliases.internalValue = value.hostAliases;
      this._hostIpc = value.hostIpc;
      this._hostNetwork = value.hostNetwork;
      this._hostPid = value.hostPid;
      this._hostUsers = value.hostUsers;
      this._hostname = value.hostname;
      this._imagePullSecrets.internalValue = value.imagePullSecrets;
      this._initContainers.internalValue = value.initContainers;
      this._nodeName = value.nodeName;
      this._nodeSelector = value.nodeSelector;
      this._os.internalValue = value.os;
      this._overhead = value.overhead;
      this._preemptionPolicy = value.preemptionPolicy;
      this._priority = value.priority;
      this._priorityClassName = value.priorityClassName;
      this._readinessGates.internalValue = value.readinessGates;
      this._resourceClaims.internalValue = value.resourceClaims;
      this._restartPolicy = value.restartPolicy;
      this._runtimeClassName = value.runtimeClassName;
      this._schedulerName = value.schedulerName;
      this._schedulingGates.internalValue = value.schedulingGates;
      this._securityContext.internalValue = value.securityContext;
      this._serviceAccount = value.serviceAccount;
      this._serviceAccountName = value.serviceAccountName;
      this._setHostnameAsFqdn = value.setHostnameAsFqdn;
      this._shareProcessNamespace = value.shareProcessNamespace;
      this._subdomain = value.subdomain;
      this._terminationGracePeriodSeconds = value.terminationGracePeriodSeconds;
      this._tolerations.internalValue = value.tolerations;
      this._topologySpreadConstraints.internalValue = value.topologySpreadConstraints;
      this._volumes.internalValue = value.volumes;
    }
  }

  // active_deadline_seconds - computed: false, optional: true, required: false
  private _activeDeadlineSeconds?: number; 
  public get activeDeadlineSeconds() {
    return this.getNumberAttribute('active_deadline_seconds');
  }
  public set activeDeadlineSeconds(value: number) {
    this._activeDeadlineSeconds = value;
  }
  public resetActiveDeadlineSeconds() {
    this._activeDeadlineSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeDeadlineSecondsInput() {
    return this._activeDeadlineSeconds;
  }

  // affinity - computed: false, optional: true, required: false
  private _affinity = new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecAffinityOutputReference(this, "affinity");
  public get affinity() {
    return this._affinity;
  }
  public putAffinity(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecAffinity) {
    this._affinity.internalValue = value;
  }
  public resetAffinity() {
    this._affinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityInput() {
    return this._affinity.internalValue;
  }

  // automount_service_account_token - computed: false, optional: true, required: false
  private _automountServiceAccountToken?: boolean | cdktf.IResolvable; 
  public get automountServiceAccountToken() {
    return this.getBooleanAttribute('automount_service_account_token');
  }
  public set automountServiceAccountToken(value: boolean | cdktf.IResolvable) {
    this._automountServiceAccountToken = value;
  }
  public resetAutomountServiceAccountToken() {
    this._automountServiceAccountToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automountServiceAccountTokenInput() {
    return this._automountServiceAccountToken;
  }

  // containers - computed: false, optional: false, required: true
  private _containers = new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecContainersList(this, "containers", false);
  public get containers() {
    return this._containers;
  }
  public putContainers(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecContainers[] | cdktf.IResolvable) {
    this._containers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containersInput() {
    return this._containers.internalValue;
  }

  // dns_config - computed: false, optional: true, required: false
  private _dnsConfig = new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecDnsConfigOutputReference(this, "dns_config");
  public get dnsConfig() {
    return this._dnsConfig;
  }
  public putDnsConfig(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecDnsConfig) {
    this._dnsConfig.internalValue = value;
  }
  public resetDnsConfig() {
    this._dnsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsConfigInput() {
    return this._dnsConfig.internalValue;
  }

  // dns_policy - computed: false, optional: true, required: false
  private _dnsPolicy?: string; 
  public get dnsPolicy() {
    return this.getStringAttribute('dns_policy');
  }
  public set dnsPolicy(value: string) {
    this._dnsPolicy = value;
  }
  public resetDnsPolicy() {
    this._dnsPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsPolicyInput() {
    return this._dnsPolicy;
  }

  // enable_service_links - computed: false, optional: true, required: false
  private _enableServiceLinks?: boolean | cdktf.IResolvable; 
  public get enableServiceLinks() {
    return this.getBooleanAttribute('enable_service_links');
  }
  public set enableServiceLinks(value: boolean | cdktf.IResolvable) {
    this._enableServiceLinks = value;
  }
  public resetEnableServiceLinks() {
    this._enableServiceLinks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableServiceLinksInput() {
    return this._enableServiceLinks;
  }

  // ephemeral_containers - computed: false, optional: true, required: false
  private _ephemeralContainers = new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecEphemeralContainersList(this, "ephemeral_containers", false);
  public get ephemeralContainers() {
    return this._ephemeralContainers;
  }
  public putEphemeralContainers(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecEphemeralContainers[] | cdktf.IResolvable) {
    this._ephemeralContainers.internalValue = value;
  }
  public resetEphemeralContainers() {
    this._ephemeralContainers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ephemeralContainersInput() {
    return this._ephemeralContainers.internalValue;
  }

  // host_aliases - computed: false, optional: true, required: false
  private _hostAliases = new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecHostAliasesList(this, "host_aliases", false);
  public get hostAliases() {
    return this._hostAliases;
  }
  public putHostAliases(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecHostAliases[] | cdktf.IResolvable) {
    this._hostAliases.internalValue = value;
  }
  public resetHostAliases() {
    this._hostAliases.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostAliasesInput() {
    return this._hostAliases.internalValue;
  }

  // host_ipc - computed: false, optional: true, required: false
  private _hostIpc?: boolean | cdktf.IResolvable; 
  public get hostIpc() {
    return this.getBooleanAttribute('host_ipc');
  }
  public set hostIpc(value: boolean | cdktf.IResolvable) {
    this._hostIpc = value;
  }
  public resetHostIpc() {
    this._hostIpc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostIpcInput() {
    return this._hostIpc;
  }

  // host_network - computed: false, optional: true, required: false
  private _hostNetwork?: boolean | cdktf.IResolvable; 
  public get hostNetwork() {
    return this.getBooleanAttribute('host_network');
  }
  public set hostNetwork(value: boolean | cdktf.IResolvable) {
    this._hostNetwork = value;
  }
  public resetHostNetwork() {
    this._hostNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNetworkInput() {
    return this._hostNetwork;
  }

  // host_pid - computed: false, optional: true, required: false
  private _hostPid?: boolean | cdktf.IResolvable; 
  public get hostPid() {
    return this.getBooleanAttribute('host_pid');
  }
  public set hostPid(value: boolean | cdktf.IResolvable) {
    this._hostPid = value;
  }
  public resetHostPid() {
    this._hostPid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostPidInput() {
    return this._hostPid;
  }

  // host_users - computed: false, optional: true, required: false
  private _hostUsers?: boolean | cdktf.IResolvable; 
  public get hostUsers() {
    return this.getBooleanAttribute('host_users');
  }
  public set hostUsers(value: boolean | cdktf.IResolvable) {
    this._hostUsers = value;
  }
  public resetHostUsers() {
    this._hostUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostUsersInput() {
    return this._hostUsers;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // image_pull_secrets - computed: false, optional: true, required: false
  private _imagePullSecrets = new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecImagePullSecretsList(this, "image_pull_secrets", false);
  public get imagePullSecrets() {
    return this._imagePullSecrets;
  }
  public putImagePullSecrets(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecImagePullSecrets[] | cdktf.IResolvable) {
    this._imagePullSecrets.internalValue = value;
  }
  public resetImagePullSecrets() {
    this._imagePullSecrets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullSecretsInput() {
    return this._imagePullSecrets.internalValue;
  }

  // init_containers - computed: false, optional: true, required: false
  private _initContainers = new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainersList(this, "init_containers", false);
  public get initContainers() {
    return this._initContainers;
  }
  public putInitContainers(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecInitContainers[] | cdktf.IResolvable) {
    this._initContainers.internalValue = value;
  }
  public resetInitContainers() {
    this._initContainers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initContainersInput() {
    return this._initContainers.internalValue;
  }

  // node_name - computed: false, optional: true, required: false
  private _nodeName?: string; 
  public get nodeName() {
    return this.getStringAttribute('node_name');
  }
  public set nodeName(value: string) {
    this._nodeName = value;
  }
  public resetNodeName() {
    this._nodeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeNameInput() {
    return this._nodeName;
  }

  // node_selector - computed: false, optional: true, required: false
  private _nodeSelector?: { [key: string]: string }; 
  public get nodeSelector() {
    return this.getStringMapAttribute('node_selector');
  }
  public set nodeSelector(value: { [key: string]: string }) {
    this._nodeSelector = value;
  }
  public resetNodeSelector() {
    this._nodeSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorInput() {
    return this._nodeSelector;
  }

  // os - computed: false, optional: true, required: false
  private _os = new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecOsOutputReference(this, "os");
  public get os() {
    return this._os;
  }
  public putOs(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecOs) {
    this._os.internalValue = value;
  }
  public resetOs() {
    this._os.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osInput() {
    return this._os.internalValue;
  }

  // overhead - computed: false, optional: true, required: false
  private _overhead?: { [key: string]: string }; 
  public get overhead() {
    return this.getStringMapAttribute('overhead');
  }
  public set overhead(value: { [key: string]: string }) {
    this._overhead = value;
  }
  public resetOverhead() {
    this._overhead = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overheadInput() {
    return this._overhead;
  }

  // preemption_policy - computed: false, optional: true, required: false
  private _preemptionPolicy?: string; 
  public get preemptionPolicy() {
    return this.getStringAttribute('preemption_policy');
  }
  public set preemptionPolicy(value: string) {
    this._preemptionPolicy = value;
  }
  public resetPreemptionPolicy() {
    this._preemptionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preemptionPolicyInput() {
    return this._preemptionPolicy;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // priority_class_name - computed: false, optional: true, required: false
  private _priorityClassName?: string; 
  public get priorityClassName() {
    return this.getStringAttribute('priority_class_name');
  }
  public set priorityClassName(value: string) {
    this._priorityClassName = value;
  }
  public resetPriorityClassName() {
    this._priorityClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityClassNameInput() {
    return this._priorityClassName;
  }

  // readiness_gates - computed: false, optional: true, required: false
  private _readinessGates = new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecReadinessGatesList(this, "readiness_gates", false);
  public get readinessGates() {
    return this._readinessGates;
  }
  public putReadinessGates(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecReadinessGates[] | cdktf.IResolvable) {
    this._readinessGates.internalValue = value;
  }
  public resetReadinessGates() {
    this._readinessGates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readinessGatesInput() {
    return this._readinessGates.internalValue;
  }

  // resource_claims - computed: false, optional: true, required: false
  private _resourceClaims = new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecResourceClaimsList(this, "resource_claims", false);
  public get resourceClaims() {
    return this._resourceClaims;
  }
  public putResourceClaims(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecResourceClaims[] | cdktf.IResolvable) {
    this._resourceClaims.internalValue = value;
  }
  public resetResourceClaims() {
    this._resourceClaims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceClaimsInput() {
    return this._resourceClaims.internalValue;
  }

  // restart_policy - computed: false, optional: true, required: false
  private _restartPolicy?: string; 
  public get restartPolicy() {
    return this.getStringAttribute('restart_policy');
  }
  public set restartPolicy(value: string) {
    this._restartPolicy = value;
  }
  public resetRestartPolicy() {
    this._restartPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restartPolicyInput() {
    return this._restartPolicy;
  }

  // runtime_class_name - computed: false, optional: true, required: false
  private _runtimeClassName?: string; 
  public get runtimeClassName() {
    return this.getStringAttribute('runtime_class_name');
  }
  public set runtimeClassName(value: string) {
    this._runtimeClassName = value;
  }
  public resetRuntimeClassName() {
    this._runtimeClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeClassNameInput() {
    return this._runtimeClassName;
  }

  // scheduler_name - computed: false, optional: true, required: false
  private _schedulerName?: string; 
  public get schedulerName() {
    return this.getStringAttribute('scheduler_name');
  }
  public set schedulerName(value: string) {
    this._schedulerName = value;
  }
  public resetSchedulerName() {
    this._schedulerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulerNameInput() {
    return this._schedulerName;
  }

  // scheduling_gates - computed: false, optional: true, required: false
  private _schedulingGates = new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecSchedulingGatesList(this, "scheduling_gates", false);
  public get schedulingGates() {
    return this._schedulingGates;
  }
  public putSchedulingGates(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecSchedulingGates[] | cdktf.IResolvable) {
    this._schedulingGates.internalValue = value;
  }
  public resetSchedulingGates() {
    this._schedulingGates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingGatesInput() {
    return this._schedulingGates.internalValue;
  }

  // security_context - computed: false, optional: true, required: false
  private _securityContext = new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecSecurityContextOutputReference(this, "security_context");
  public get securityContext() {
    return this._securityContext;
  }
  public putSecurityContext(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecSecurityContext) {
    this._securityContext.internalValue = value;
  }
  public resetSecurityContext() {
    this._securityContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityContextInput() {
    return this._securityContext.internalValue;
  }

  // service_account - computed: false, optional: true, required: false
  private _serviceAccount?: string; 
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
  public set serviceAccount(value: string) {
    this._serviceAccount = value;
  }
  public resetServiceAccount() {
    this._serviceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount;
  }

  // service_account_name - computed: false, optional: true, required: false
  private _serviceAccountName?: string; 
  public get serviceAccountName() {
    return this.getStringAttribute('service_account_name');
  }
  public set serviceAccountName(value: string) {
    this._serviceAccountName = value;
  }
  public resetServiceAccountName() {
    this._serviceAccountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountNameInput() {
    return this._serviceAccountName;
  }

  // set_hostname_as_fqdn - computed: false, optional: true, required: false
  private _setHostnameAsFqdn?: boolean | cdktf.IResolvable; 
  public get setHostnameAsFqdn() {
    return this.getBooleanAttribute('set_hostname_as_fqdn');
  }
  public set setHostnameAsFqdn(value: boolean | cdktf.IResolvable) {
    this._setHostnameAsFqdn = value;
  }
  public resetSetHostnameAsFqdn() {
    this._setHostnameAsFqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setHostnameAsFqdnInput() {
    return this._setHostnameAsFqdn;
  }

  // share_process_namespace - computed: false, optional: true, required: false
  private _shareProcessNamespace?: boolean | cdktf.IResolvable; 
  public get shareProcessNamespace() {
    return this.getBooleanAttribute('share_process_namespace');
  }
  public set shareProcessNamespace(value: boolean | cdktf.IResolvable) {
    this._shareProcessNamespace = value;
  }
  public resetShareProcessNamespace() {
    this._shareProcessNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shareProcessNamespaceInput() {
    return this._shareProcessNamespace;
  }

  // subdomain - computed: false, optional: true, required: false
  private _subdomain?: string; 
  public get subdomain() {
    return this.getStringAttribute('subdomain');
  }
  public set subdomain(value: string) {
    this._subdomain = value;
  }
  public resetSubdomain() {
    this._subdomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subdomainInput() {
    return this._subdomain;
  }

  // termination_grace_period_seconds - computed: false, optional: true, required: false
  private _terminationGracePeriodSeconds?: number; 
  public get terminationGracePeriodSeconds() {
    return this.getNumberAttribute('termination_grace_period_seconds');
  }
  public set terminationGracePeriodSeconds(value: number) {
    this._terminationGracePeriodSeconds = value;
  }
  public resetTerminationGracePeriodSeconds() {
    this._terminationGracePeriodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminationGracePeriodSecondsInput() {
    return this._terminationGracePeriodSeconds;
  }

  // tolerations - computed: false, optional: true, required: false
  private _tolerations = new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }
  public putTolerations(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecTolerations[] | cdktf.IResolvable) {
    this._tolerations.internalValue = value;
  }
  public resetTolerations() {
    this._tolerations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationsInput() {
    return this._tolerations.internalValue;
  }

  // topology_spread_constraints - computed: false, optional: true, required: false
  private _topologySpreadConstraints = new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraintsList(this, "topology_spread_constraints", false);
  public get topologySpreadConstraints() {
    return this._topologySpreadConstraints;
  }
  public putTopologySpreadConstraints(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecTopologySpreadConstraints[] | cdktf.IResolvable) {
    this._topologySpreadConstraints.internalValue = value;
  }
  public resetTopologySpreadConstraints() {
    this._topologySpreadConstraints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologySpreadConstraintsInput() {
    return this._topologySpreadConstraints.internalValue;
  }

  // volumes - computed: false, optional: true, required: false
  private _volumes = new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumesList(this, "volumes", false);
  public get volumes() {
    return this._volumes;
  }
  public putVolumes(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecVolumes[] | cdktf.IResolvable) {
    this._volumes.internalValue = value;
  }
  public resetVolumes() {
    this._volumes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesInput() {
    return this._volumes.internalValue;
  }
}
export interface DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplate {
  /**
  * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#metadata DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#metadata}
  */
  readonly metadata?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateMetadata;
  /**
  * Specification of the desired behavior of the pod. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#spec DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpec;
}

export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateToTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateMetadataToTerraform(struct!.metadata),
    spec: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecToTerraform(struct!.spec),
  }
}


export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateToHclTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata: {
      value: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateMetadata",
    },
    spec: {
      value: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpec",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._spec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metadata.internalValue = undefined;
      this._spec.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metadata.internalValue = value.metadata;
      this._spec.internalValue = value.spec;
    }
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }
}
export interface DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpec {
  /**
  * Required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#github_config_secret DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#github_config_secret}
  */
  readonly githubConfigSecret?: string;
  /**
  * Required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#github_config_url DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#github_config_url}
  */
  readonly githubConfigUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#github_server_tls DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#github_server_tls}
  */
  readonly githubServerTls?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecGithubServerTls;
  /**
  * PodTemplateSpec describes the data a pod should have when created from a template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#listener_template DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#listener_template}
  */
  readonly listenerTemplate?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecListenerTemplate;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#max_runners DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#max_runners}
  */
  readonly maxRunners?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#min_runners DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#min_runners}
  */
  readonly minRunners?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#proxy DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#proxy}
  */
  readonly proxy?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecProxy;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#runner_group DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#runner_group}
  */
  readonly runnerGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#runner_scale_set_name DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#runner_scale_set_name}
  */
  readonly runnerScaleSetName?: string;
  /**
  * Required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/actions_github_com_autoscaling_runner_set_v1alpha1_manifest#template DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1Manifest#template}
  */
  readonly template?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplate;
}

export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecToTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    github_config_secret: cdktf.stringToTerraform(struct!.githubConfigSecret),
    github_config_url: cdktf.stringToTerraform(struct!.githubConfigUrl),
    github_server_tls: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecGithubServerTlsToTerraform(struct!.githubServerTls),
    listener_template: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecListenerTemplateToTerraform(struct!.listenerTemplate),
    max_runners: cdktf.numberToTerraform(struct!.maxRunners),
    min_runners: cdktf.numberToTerraform(struct!.minRunners),
    proxy: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecProxyToTerraform(struct!.proxy),
    runner_group: cdktf.stringToTerraform(struct!.runnerGroup),
    runner_scale_set_name: cdktf.stringToTerraform(struct!.runnerScaleSetName),
    template: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateToTerraform(struct!.template),
  }
}


export function dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    github_config_secret: {
      value: cdktf.stringToHclTerraform(struct!.githubConfigSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    github_config_url: {
      value: cdktf.stringToHclTerraform(struct!.githubConfigUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    github_server_tls: {
      value: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecGithubServerTlsToHclTerraform(struct!.githubServerTls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecGithubServerTls",
    },
    listener_template: {
      value: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecListenerTemplateToHclTerraform(struct!.listenerTemplate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecListenerTemplate",
    },
    max_runners: {
      value: cdktf.numberToHclTerraform(struct!.maxRunners),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_runners: {
      value: cdktf.numberToHclTerraform(struct!.minRunners),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    proxy: {
      value: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecProxyToHclTerraform(struct!.proxy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecProxy",
    },
    runner_group: {
      value: cdktf.stringToHclTerraform(struct!.runnerGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    runner_scale_set_name: {
      value: cdktf.stringToHclTerraform(struct!.runnerScaleSetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template: {
      value: dataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplate",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._githubConfigSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.githubConfigSecret = this._githubConfigSecret;
    }
    if (this._githubConfigUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.githubConfigUrl = this._githubConfigUrl;
    }
    if (this._githubServerTls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.githubServerTls = this._githubServerTls?.internalValue;
    }
    if (this._listenerTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.listenerTemplate = this._listenerTemplate?.internalValue;
    }
    if (this._maxRunners !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRunners = this._maxRunners;
    }
    if (this._minRunners !== undefined) {
      hasAnyValues = true;
      internalValueResult.minRunners = this._minRunners;
    }
    if (this._proxy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxy = this._proxy?.internalValue;
    }
    if (this._runnerGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.runnerGroup = this._runnerGroup;
    }
    if (this._runnerScaleSetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.runnerScaleSetName = this._runnerScaleSetName;
    }
    if (this._template?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._githubConfigSecret = undefined;
      this._githubConfigUrl = undefined;
      this._githubServerTls.internalValue = undefined;
      this._listenerTemplate.internalValue = undefined;
      this._maxRunners = undefined;
      this._minRunners = undefined;
      this._proxy.internalValue = undefined;
      this._runnerGroup = undefined;
      this._runnerScaleSetName = undefined;
      this._template.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._githubConfigSecret = value.githubConfigSecret;
      this._githubConfigUrl = value.githubConfigUrl;
      this._githubServerTls.internalValue = value.githubServerTls;
      this._listenerTemplate.internalValue = value.listenerTemplate;
      this._maxRunners = value.maxRunners;
      this._minRunners = value.minRunners;
      this._proxy.internalValue = value.proxy;
      this._runnerGroup = value.runnerGroup;
      this._runnerScaleSetName = value.runnerScaleSetName;
      this._template.internalValue = value.template;
    }
  }

  // github_config_secret - computed: false, optional: true, required: false
  private _githubConfigSecret?: string; 
  public get githubConfigSecret() {
    return this.getStringAttribute('github_config_secret');
  }
  public set githubConfigSecret(value: string) {
    this._githubConfigSecret = value;
  }
  public resetGithubConfigSecret() {
    this._githubConfigSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get githubConfigSecretInput() {
    return this._githubConfigSecret;
  }

  // github_config_url - computed: false, optional: true, required: false
  private _githubConfigUrl?: string; 
  public get githubConfigUrl() {
    return this.getStringAttribute('github_config_url');
  }
  public set githubConfigUrl(value: string) {
    this._githubConfigUrl = value;
  }
  public resetGithubConfigUrl() {
    this._githubConfigUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get githubConfigUrlInput() {
    return this._githubConfigUrl;
  }

  // github_server_tls - computed: false, optional: true, required: false
  private _githubServerTls = new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecGithubServerTlsOutputReference(this, "github_server_tls");
  public get githubServerTls() {
    return this._githubServerTls;
  }
  public putGithubServerTls(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecGithubServerTls) {
    this._githubServerTls.internalValue = value;
  }
  public resetGithubServerTls() {
    this._githubServerTls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get githubServerTlsInput() {
    return this._githubServerTls.internalValue;
  }

  // listener_template - computed: false, optional: true, required: false
  private _listenerTemplate = new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecListenerTemplateOutputReference(this, "listener_template");
  public get listenerTemplate() {
    return this._listenerTemplate;
  }
  public putListenerTemplate(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecListenerTemplate) {
    this._listenerTemplate.internalValue = value;
  }
  public resetListenerTemplate() {
    this._listenerTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerTemplateInput() {
    return this._listenerTemplate.internalValue;
  }

  // max_runners - computed: false, optional: true, required: false
  private _maxRunners?: number; 
  public get maxRunners() {
    return this.getNumberAttribute('max_runners');
  }
  public set maxRunners(value: number) {
    this._maxRunners = value;
  }
  public resetMaxRunners() {
    this._maxRunners = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRunnersInput() {
    return this._maxRunners;
  }

  // min_runners - computed: false, optional: true, required: false
  private _minRunners?: number; 
  public get minRunners() {
    return this.getNumberAttribute('min_runners');
  }
  public set minRunners(value: number) {
    this._minRunners = value;
  }
  public resetMinRunners() {
    this._minRunners = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minRunnersInput() {
    return this._minRunners;
  }

  // proxy - computed: false, optional: true, required: false
  private _proxy = new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecProxyOutputReference(this, "proxy");
  public get proxy() {
    return this._proxy;
  }
  public putProxy(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecProxy) {
    this._proxy.internalValue = value;
  }
  public resetProxy() {
    this._proxy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyInput() {
    return this._proxy.internalValue;
  }

  // runner_group - computed: false, optional: true, required: false
  private _runnerGroup?: string; 
  public get runnerGroup() {
    return this.getStringAttribute('runner_group');
  }
  public set runnerGroup(value: string) {
    this._runnerGroup = value;
  }
  public resetRunnerGroup() {
    this._runnerGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runnerGroupInput() {
    return this._runnerGroup;
  }

  // runner_scale_set_name - computed: false, optional: true, required: false
  private _runnerScaleSetName?: string; 
  public get runnerScaleSetName() {
    return this.getStringAttribute('runner_scale_set_name');
  }
  public set runnerScaleSetName(value: string) {
    this._runnerScaleSetName = value;
  }
  public resetRunnerScaleSetName() {
    this._runnerScaleSetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runnerScaleSetNameInput() {
    return this._runnerScaleSetName;
  }

  // template - computed: false, optional: true, required: false
  private _template = new DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DataK8SActionsGithubComAutoscalingRunnerSetV1Alpha1ManifestSpecTemplate) {
    this._template.internalValue = value;
  }
  public resetTemplate() {
    this._template.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }
}
