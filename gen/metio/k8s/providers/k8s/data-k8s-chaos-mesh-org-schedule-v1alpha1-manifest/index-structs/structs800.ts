import * as cdktf from 'cdktf';
import { DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerSecurityContextCapabilities,
dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerSecurityContextCapabilitiesToTerraform,
dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerSecurityContextCapabilitiesToHclTerraform,
DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerSecurityContextCapabilitiesOutputReference,
DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerEnv,
dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerEnvToTerraform,
dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerEnvToHclTerraform,
DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerEnvList,
DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerEnvFrom,
dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerEnvFromToTerraform,
dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerEnvFromToHclTerraform,
DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerEnvFromList,
DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerLifecycle,
dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerLifecycleToTerraform,
dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerLifecycleToHclTerraform,
DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerLifecycleOutputReference,
DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerLivenessProbe,
dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerLivenessProbeToTerraform,
dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerLivenessProbeToHclTerraform,
DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerLivenessProbeOutputReference,
DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerPorts,
dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerPortsToTerraform,
dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerPortsToHclTerraform,
DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerPortsList,
DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerReadinessProbe,
dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerReadinessProbeToTerraform,
dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerReadinessProbeToHclTerraform,
DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerReadinessProbeOutputReference,
DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerResizePolicy,
dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerResizePolicyToTerraform,
dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerResizePolicyToHclTerraform,
DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerResizePolicyList,
DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerResources,
dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerResourcesToTerraform,
dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerResourcesToHclTerraform,
DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerResourcesOutputReference,
DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesPhysicalmachineChaos,
dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesPhysicalmachineChaosToTerraform,
dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesPhysicalmachineChaosToHclTerraform,
DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesPhysicalmachineChaosOutputReference,
DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesPodChaos,
dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesPodChaosToTerraform,
dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesPodChaosToHclTerraform,
DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesPodChaosOutputReference,
DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesSchedule,
dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesScheduleToTerraform,
dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesScheduleToHclTerraform,
DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesScheduleOutputReference,
DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesStatusCheck,
dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesStatusCheckToTerraform,
dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesStatusCheckToHclTerraform,
DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesStatusCheckOutputReference,
DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesStressChaos,
dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesStressChaosToTerraform,
dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesStressChaosToHclTerraform,
DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesStressChaosOutputReference } from './structs400'
import { DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesAwsChaos,
dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesAwsChaosToTerraform,
dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesAwsChaosToHclTerraform,
DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesAwsChaosOutputReference,
DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesAzureChaos,
dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesAzureChaosToTerraform,
dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesAzureChaosToHclTerraform,
DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesAzureChaosOutputReference,
DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesBlockChaos,
dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesBlockChaosToTerraform,
dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesBlockChaosToHclTerraform,
DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesBlockChaosOutputReference,
DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesConditionalBranches,
dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesConditionalBranchesToTerraform,
dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesConditionalBranchesToHclTerraform,
DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesConditionalBranchesList,
DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesDnsChaos,
dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesDnsChaosToTerraform,
dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesDnsChaosToHclTerraform,
DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesDnsChaosOutputReference,
DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesGcpChaos,
dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesGcpChaosToTerraform,
dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesGcpChaosToHclTerraform,
DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesGcpChaosOutputReference,
DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesHttpChaos,
dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesHttpChaosToTerraform,
dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesHttpChaosToHclTerraform,
DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesHttpChaosOutputReference,
DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesIoChaos,
dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesIoChaosToTerraform,
dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesIoChaosToHclTerraform,
DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesIoChaosOutputReference,
DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesJvmChaos,
dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesJvmChaosToTerraform,
dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesJvmChaosToHclTerraform,
DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesJvmChaosOutputReference,
DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesKernelChaos,
dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesKernelChaosToTerraform,
dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesKernelChaosToHclTerraform,
DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesKernelChaosOutputReference,
DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesNetworkChaos,
dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesNetworkChaosToTerraform,
dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesNetworkChaosToHclTerraform,
DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesNetworkChaosOutputReference,
DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecAwsChaos,
dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecAwsChaosToTerraform,
dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecAwsChaosToHclTerraform,
DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecAwsChaosOutputReference,
DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecAzureChaos,
dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecAzureChaosToTerraform,
dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecAzureChaosToHclTerraform,
DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecAzureChaosOutputReference,
DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecBlockChaos,
dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecBlockChaosToTerraform,
dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecBlockChaosToHclTerraform,
DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecBlockChaosOutputReference,
DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecDnsChaos,
dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecDnsChaosToTerraform,
dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecDnsChaosToHclTerraform,
DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecDnsChaosOutputReference,
DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecGcpChaos,
dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecGcpChaosToTerraform,
dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecGcpChaosToHclTerraform,
DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecGcpChaosOutputReference,
DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecHttpChaos,
dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecHttpChaosToTerraform,
dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecHttpChaosToHclTerraform,
DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecHttpChaosOutputReference,
DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecIoChaos,
dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecIoChaosToTerraform,
dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecIoChaosToHclTerraform,
DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecIoChaosOutputReference,
DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecJvmChaos,
dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecJvmChaosToTerraform,
dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecJvmChaosToHclTerraform,
DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecJvmChaosOutputReference,
DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecKernelChaos,
dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecKernelChaosToTerraform,
dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecKernelChaosToHclTerraform,
DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecKernelChaosOutputReference,
DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecNetworkChaos,
dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecNetworkChaosToTerraform,
dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecNetworkChaosToHclTerraform,
DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecNetworkChaosOutputReference,
DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecPhysicalmachineChaos,
dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecPhysicalmachineChaosToTerraform,
dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecPhysicalmachineChaosToHclTerraform,
DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecPhysicalmachineChaosOutputReference,
DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecPodChaos,
dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecPodChaosToTerraform,
dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecPodChaosToHclTerraform,
DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecPodChaosOutputReference,
DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecStressChaos,
dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecStressChaosToTerraform,
dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecStressChaosToHclTerraform,
DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecStressChaosOutputReference,
DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecTimeChaos,
dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecTimeChaosToTerraform,
dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecTimeChaosToHclTerraform,
DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecTimeChaosOutputReference } from './structs0'
export interface DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerSecurityContextSeLinuxOptions {
  /**
  * Level is SELinux level label that applies to the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#level DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#level}
  */
  readonly level?: string;
  /**
  * Role is a SELinux role label that applies to the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#role DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#role}
  */
  readonly role?: string;
  /**
  * Type is a SELinux type label that applies to the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#type DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#type}
  */
  readonly type?: string;
  /**
  * User is a SELinux user label that applies to the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#user DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#user}
  */
  readonly user?: string;
}

export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerSecurityContextSeLinuxOptionsToTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerSecurityContextSeLinuxOptions | cdktf.IResolvable): any {
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


export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerSecurityContextSeLinuxOptionsToHclTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerSecurityContextSeLinuxOptions | cdktf.IResolvable): any {
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

export class DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerSecurityContextSeLinuxOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerSecurityContextSeLinuxOptions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerSecurityContextSeLinuxOptions | cdktf.IResolvable | undefined) {
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
export interface DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerSecurityContextSeccompProfile {
  /**
  * localhostProfile indicates a profile defined in a file on the node should be used. The profile must be preconfigured on the node to work. Must be a descending path, relative to the kubelet's configured seccomp profile location. Must be set if type is 'Localhost'. Must NOT be set for any other type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#localhost_profile DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#localhost_profile}
  */
  readonly localhostProfile?: string;
  /**
  * type indicates which kind of seccomp profile will be applied. Valid options are: Localhost - a profile defined in a file on the node should be used. RuntimeDefault - the container runtime default profile should be used. Unconfined - no profile should be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#type DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#type}
  */
  readonly type: string;
}

export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerSecurityContextSeccompProfileToTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerSecurityContextSeccompProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    localhost_profile: cdktf.stringToTerraform(struct!.localhostProfile),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerSecurityContextSeccompProfileToHclTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerSecurityContextSeccompProfile | cdktf.IResolvable): any {
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

export class DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerSecurityContextSeccompProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerSecurityContextSeccompProfile | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerSecurityContextSeccompProfile | cdktf.IResolvable | undefined) {
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
export interface DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerSecurityContextWindowsOptions {
  /**
  * GMSACredentialSpec is where the GMSA admission webhook (https://github.com/kubernetes-sigs/windows-gmsa) inlines the contents of the GMSA credential spec named by the GMSACredentialSpecName field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#gmsa_credential_spec DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#gmsa_credential_spec}
  */
  readonly gmsaCredentialSpec?: string;
  /**
  * GMSACredentialSpecName is the name of the GMSA credential spec to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#gmsa_credential_spec_name DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#gmsa_credential_spec_name}
  */
  readonly gmsaCredentialSpecName?: string;
  /**
  * HostProcess determines if a container should be run as a 'Host Process' container. All of a Pod's containers must have the same effective HostProcess value (it is not allowed to have a mix of HostProcess containers and non-HostProcess containers). In addition, if HostProcess is true then HostNetwork must also be set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#host_process DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#host_process}
  */
  readonly hostProcess?: boolean | cdktf.IResolvable;
  /**
  * The UserName in Windows to run the entrypoint of the container process. Defaults to the user specified in image metadata if unspecified. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#run_as_user_name DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#run_as_user_name}
  */
  readonly runAsUserName?: string;
}

export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerSecurityContextWindowsOptionsToTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerSecurityContextWindowsOptions | cdktf.IResolvable): any {
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


export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerSecurityContextWindowsOptionsToHclTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerSecurityContextWindowsOptions | cdktf.IResolvable): any {
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

export class DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerSecurityContextWindowsOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerSecurityContextWindowsOptions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerSecurityContextWindowsOptions | cdktf.IResolvable | undefined) {
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
export interface DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerSecurityContext {
  /**
  * AllowPrivilegeEscalation controls whether a process can gain more privileges than its parent process. This bool directly controls if the no_new_privs flag will be set on the container process. AllowPrivilegeEscalation is true always when the container is: 1) run as Privileged 2) has CAP_SYS_ADMIN Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#allow_privilege_escalation DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#allow_privilege_escalation}
  */
  readonly allowPrivilegeEscalation?: boolean | cdktf.IResolvable;
  /**
  * The capabilities to add/drop when running containers. Defaults to the default set of capabilities granted by the container runtime. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#capabilities DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#capabilities}
  */
  readonly capabilities?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerSecurityContextCapabilities;
  /**
  * Run container in privileged mode. Processes in privileged containers are essentially equivalent to root on the host. Defaults to false. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#privileged DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#privileged}
  */
  readonly privileged?: boolean | cdktf.IResolvable;
  /**
  * procMount denotes the type of proc mount to use for the containers. The default is DefaultProcMount which uses the container runtime defaults for readonly paths and masked paths. This requires the ProcMountType feature flag to be enabled. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#proc_mount DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#proc_mount}
  */
  readonly procMount?: string;
  /**
  * Whether this container has a read-only root filesystem. Default is false. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#read_only_root_filesystem DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#read_only_root_filesystem}
  */
  readonly readOnlyRootFilesystem?: boolean | cdktf.IResolvable;
  /**
  * The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#run_as_group DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#run_as_group}
  */
  readonly runAsGroup?: number;
  /**
  * Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#run_as_non_root DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#run_as_non_root}
  */
  readonly runAsNonRoot?: boolean | cdktf.IResolvable;
  /**
  * The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#run_as_user DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#run_as_user}
  */
  readonly runAsUser?: number;
  /**
  * The SELinux context to be applied to the container. If unspecified, the container runtime will allocate a random SELinux context for each container. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#se_linux_options DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#se_linux_options}
  */
  readonly seLinuxOptions?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerSecurityContextSeLinuxOptions;
  /**
  * The seccomp options to use by this container. If seccomp options are provided at both the pod & container level, the container options override the pod options. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#seccomp_profile DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#seccomp_profile}
  */
  readonly seccompProfile?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerSecurityContextSeccompProfile;
  /**
  * The Windows specific settings applied to all containers. If unspecified, the options from the PodSecurityContext will be used. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is linux.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#windows_options DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#windows_options}
  */
  readonly windowsOptions?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerSecurityContextWindowsOptions;
}

export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerSecurityContextToTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerSecurityContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_privilege_escalation: cdktf.booleanToTerraform(struct!.allowPrivilegeEscalation),
    capabilities: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerSecurityContextCapabilitiesToTerraform(struct!.capabilities),
    privileged: cdktf.booleanToTerraform(struct!.privileged),
    proc_mount: cdktf.stringToTerraform(struct!.procMount),
    read_only_root_filesystem: cdktf.booleanToTerraform(struct!.readOnlyRootFilesystem),
    run_as_group: cdktf.numberToTerraform(struct!.runAsGroup),
    run_as_non_root: cdktf.booleanToTerraform(struct!.runAsNonRoot),
    run_as_user: cdktf.numberToTerraform(struct!.runAsUser),
    se_linux_options: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerSecurityContextSeLinuxOptionsToTerraform(struct!.seLinuxOptions),
    seccomp_profile: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerSecurityContextSeccompProfileToTerraform(struct!.seccompProfile),
    windows_options: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerSecurityContextWindowsOptionsToTerraform(struct!.windowsOptions),
  }
}


export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerSecurityContextToHclTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerSecurityContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_privilege_escalation: {
      value: cdktf.booleanToHclTerraform(struct!.allowPrivilegeEscalation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    capabilities: {
      value: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerSecurityContextCapabilitiesToHclTerraform(struct!.capabilities),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerSecurityContextCapabilities",
    },
    privileged: {
      value: cdktf.booleanToHclTerraform(struct!.privileged),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    proc_mount: {
      value: cdktf.stringToHclTerraform(struct!.procMount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_only_root_filesystem: {
      value: cdktf.booleanToHclTerraform(struct!.readOnlyRootFilesystem),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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
      value: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerSecurityContextSeLinuxOptionsToHclTerraform(struct!.seLinuxOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerSecurityContextSeLinuxOptions",
    },
    seccomp_profile: {
      value: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerSecurityContextSeccompProfileToHclTerraform(struct!.seccompProfile),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerSecurityContextSeccompProfile",
    },
    windows_options: {
      value: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerSecurityContextWindowsOptionsToHclTerraform(struct!.windowsOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerSecurityContextWindowsOptions",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerSecurityContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerSecurityContext | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowPrivilegeEscalation !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowPrivilegeEscalation = this._allowPrivilegeEscalation;
    }
    if (this._capabilities?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.capabilities = this._capabilities?.internalValue;
    }
    if (this._privileged !== undefined) {
      hasAnyValues = true;
      internalValueResult.privileged = this._privileged;
    }
    if (this._procMount !== undefined) {
      hasAnyValues = true;
      internalValueResult.procMount = this._procMount;
    }
    if (this._readOnlyRootFilesystem !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnlyRootFilesystem = this._readOnlyRootFilesystem;
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
    if (this._windowsOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowsOptions = this._windowsOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerSecurityContext | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowPrivilegeEscalation = undefined;
      this._capabilities.internalValue = undefined;
      this._privileged = undefined;
      this._procMount = undefined;
      this._readOnlyRootFilesystem = undefined;
      this._runAsGroup = undefined;
      this._runAsNonRoot = undefined;
      this._runAsUser = undefined;
      this._seLinuxOptions.internalValue = undefined;
      this._seccompProfile.internalValue = undefined;
      this._windowsOptions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowPrivilegeEscalation = value.allowPrivilegeEscalation;
      this._capabilities.internalValue = value.capabilities;
      this._privileged = value.privileged;
      this._procMount = value.procMount;
      this._readOnlyRootFilesystem = value.readOnlyRootFilesystem;
      this._runAsGroup = value.runAsGroup;
      this._runAsNonRoot = value.runAsNonRoot;
      this._runAsUser = value.runAsUser;
      this._seLinuxOptions.internalValue = value.seLinuxOptions;
      this._seccompProfile.internalValue = value.seccompProfile;
      this._windowsOptions.internalValue = value.windowsOptions;
    }
  }

  // allow_privilege_escalation - computed: false, optional: true, required: false
  private _allowPrivilegeEscalation?: boolean | cdktf.IResolvable; 
  public get allowPrivilegeEscalation() {
    return this.getBooleanAttribute('allow_privilege_escalation');
  }
  public set allowPrivilegeEscalation(value: boolean | cdktf.IResolvable) {
    this._allowPrivilegeEscalation = value;
  }
  public resetAllowPrivilegeEscalation() {
    this._allowPrivilegeEscalation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowPrivilegeEscalationInput() {
    return this._allowPrivilegeEscalation;
  }

  // capabilities - computed: false, optional: true, required: false
  private _capabilities = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerSecurityContextCapabilitiesOutputReference(this, "capabilities");
  public get capabilities() {
    return this._capabilities;
  }
  public putCapabilities(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerSecurityContextCapabilities) {
    this._capabilities.internalValue = value;
  }
  public resetCapabilities() {
    this._capabilities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilitiesInput() {
    return this._capabilities.internalValue;
  }

  // privileged - computed: false, optional: true, required: false
  private _privileged?: boolean | cdktf.IResolvable; 
  public get privileged() {
    return this.getBooleanAttribute('privileged');
  }
  public set privileged(value: boolean | cdktf.IResolvable) {
    this._privileged = value;
  }
  public resetPrivileged() {
    this._privileged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegedInput() {
    return this._privileged;
  }

  // proc_mount - computed: false, optional: true, required: false
  private _procMount?: string; 
  public get procMount() {
    return this.getStringAttribute('proc_mount');
  }
  public set procMount(value: string) {
    this._procMount = value;
  }
  public resetProcMount() {
    this._procMount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get procMountInput() {
    return this._procMount;
  }

  // read_only_root_filesystem - computed: false, optional: true, required: false
  private _readOnlyRootFilesystem?: boolean | cdktf.IResolvable; 
  public get readOnlyRootFilesystem() {
    return this.getBooleanAttribute('read_only_root_filesystem');
  }
  public set readOnlyRootFilesystem(value: boolean | cdktf.IResolvable) {
    this._readOnlyRootFilesystem = value;
  }
  public resetReadOnlyRootFilesystem() {
    this._readOnlyRootFilesystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyRootFilesystemInput() {
    return this._readOnlyRootFilesystem;
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
  private _seLinuxOptions = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerSecurityContextSeLinuxOptionsOutputReference(this, "se_linux_options");
  public get seLinuxOptions() {
    return this._seLinuxOptions;
  }
  public putSeLinuxOptions(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerSecurityContextSeLinuxOptions) {
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
  private _seccompProfile = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerSecurityContextSeccompProfileOutputReference(this, "seccomp_profile");
  public get seccompProfile() {
    return this._seccompProfile;
  }
  public putSeccompProfile(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerSecurityContextSeccompProfile) {
    this._seccompProfile.internalValue = value;
  }
  public resetSeccompProfile() {
    this._seccompProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seccompProfileInput() {
    return this._seccompProfile.internalValue;
  }

  // windows_options - computed: false, optional: true, required: false
  private _windowsOptions = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerSecurityContextWindowsOptionsOutputReference(this, "windows_options");
  public get windowsOptions() {
    return this._windowsOptions;
  }
  public putWindowsOptions(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerSecurityContextWindowsOptions) {
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
export interface DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerStartupProbeExec {
  /**
  * Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#command DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#command}
  */
  readonly command?: string[];
}

export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerStartupProbeExecToTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerStartupProbeExec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
  }
}


export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerStartupProbeExecToHclTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerStartupProbeExec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    command: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerStartupProbeExecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerStartupProbeExec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerStartupProbeExec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._command = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._command = value.command;
    }
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
}
export interface DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerStartupProbeGrpc {
  /**
  * Port number of the gRPC service. Number must be in the range 1 to 65535.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#port DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#port}
  */
  readonly port: number;
  /**
  * Service is the name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md). If this is not specified, the default behavior is defined by gRPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#service DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#service}
  */
  readonly service?: string;
}

export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerStartupProbeGrpcToTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerStartupProbeGrpc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    service: cdktf.stringToTerraform(struct!.service),
  }
}


export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerStartupProbeGrpcToHclTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerStartupProbeGrpc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerStartupProbeGrpcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerStartupProbeGrpc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerStartupProbeGrpc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
      this._service = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
      this._service = value.service;
    }
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // service - computed: false, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }
}
export interface DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerStartupProbeHttpGetHttpHeaders {
  /**
  * The header field name. This will be canonicalized upon output, so case-variant names will be understood as the same header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#name DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * The header field value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#value DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerStartupProbeHttpGetHttpHeadersToTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerStartupProbeHttpGetHttpHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerStartupProbeHttpGetHttpHeadersToHclTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerStartupProbeHttpGetHttpHeaders | cdktf.IResolvable): any {
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

export class DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerStartupProbeHttpGetHttpHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerStartupProbeHttpGetHttpHeaders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerStartupProbeHttpGetHttpHeaders | cdktf.IResolvable | undefined) {
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

export class DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerStartupProbeHttpGetHttpHeadersList extends cdktf.ComplexList {
  public internalValue? : DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerStartupProbeHttpGetHttpHeaders[] | cdktf.IResolvable

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
  public get(index: number): DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerStartupProbeHttpGetHttpHeadersOutputReference {
    return new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerStartupProbeHttpGetHttpHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerStartupProbeHttpGet {
  /**
  * Host name to connect to, defaults to the pod IP. You probably want to set 'Host' in httpHeaders instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#host DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#host}
  */
  readonly host?: string;
  /**
  * Custom headers to set in the request. HTTP allows repeated headers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#http_headers DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#http_headers}
  */
  readonly httpHeaders?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerStartupProbeHttpGetHttpHeaders[] | cdktf.IResolvable;
  /**
  * Path to access on the HTTP server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#path DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#path}
  */
  readonly path?: string;
  /**
  * Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#port DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#port}
  */
  readonly port: string;
  /**
  * Scheme to use for connecting to the host. Defaults to HTTP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#scheme DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#scheme}
  */
  readonly scheme?: string;
}

export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerStartupProbeHttpGetToTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerStartupProbeHttpGet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    http_headers: cdktf.listMapper(dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerStartupProbeHttpGetHttpHeadersToTerraform, false)(struct!.httpHeaders),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
  }
}


export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerStartupProbeHttpGetToHclTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerStartupProbeHttpGet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_headers: {
      value: cdktf.listMapperHcl(dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerStartupProbeHttpGetHttpHeadersToHclTerraform, false)(struct!.httpHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerStartupProbeHttpGetHttpHeadersList",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scheme: {
      value: cdktf.stringToHclTerraform(struct!.scheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerStartupProbeHttpGetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerStartupProbeHttpGet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._httpHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeaders = this._httpHeaders?.internalValue;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._scheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheme = this._scheme;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerStartupProbeHttpGet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._httpHeaders.internalValue = undefined;
      this._path = undefined;
      this._port = undefined;
      this._scheme = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._httpHeaders.internalValue = value.httpHeaders;
      this._path = value.path;
      this._port = value.port;
      this._scheme = value.scheme;
    }
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // http_headers - computed: false, optional: true, required: false
  private _httpHeaders = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerStartupProbeHttpGetHttpHeadersList(this, "http_headers", false);
  public get httpHeaders() {
    return this._httpHeaders;
  }
  public putHttpHeaders(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerStartupProbeHttpGetHttpHeaders[] | cdktf.IResolvable) {
    this._httpHeaders.internalValue = value;
  }
  public resetHttpHeaders() {
    this._httpHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeadersInput() {
    return this._httpHeaders.internalValue;
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

  // port - computed: false, optional: false, required: true
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // scheme - computed: false, optional: true, required: false
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }
}
export interface DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerStartupProbeTcpSocket {
  /**
  * Optional: Host name to connect to, defaults to the pod IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#host DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#host}
  */
  readonly host?: string;
  /**
  * Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#port DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#port}
  */
  readonly port: string;
}

export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerStartupProbeTcpSocketToTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerStartupProbeTcpSocket | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.stringToTerraform(struct!.port),
  }
}


export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerStartupProbeTcpSocketToHclTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerStartupProbeTcpSocket | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerStartupProbeTcpSocketOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerStartupProbeTcpSocket | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerStartupProbeTcpSocket | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._port = value.port;
    }
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: false, optional: false, required: true
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerStartupProbe {
  /**
  * Exec specifies the action to take.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#exec DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#exec}
  */
  readonly exec?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerStartupProbeExec;
  /**
  * Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#failure_threshold DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * GRPC specifies an action involving a GRPC port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#grpc DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#grpc}
  */
  readonly grpc?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerStartupProbeGrpc;
  /**
  * HTTPGet specifies the http request to perform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#http_get DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#http_get}
  */
  readonly httpGet?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerStartupProbeHttpGet;
  /**
  * Number of seconds after the container has started before liveness probes are initiated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#initial_delay_seconds DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#initial_delay_seconds}
  */
  readonly initialDelaySeconds?: number;
  /**
  * How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#period_seconds DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#period_seconds}
  */
  readonly periodSeconds?: number;
  /**
  * Minimum consecutive successes for the probe to be considered successful after having failed. Defaults to 1. Must be 1 for liveness and startup. Minimum value is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#success_threshold DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#success_threshold}
  */
  readonly successThreshold?: number;
  /**
  * TCPSocket specifies an action involving a TCP port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#tcp_socket DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#tcp_socket}
  */
  readonly tcpSocket?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerStartupProbeTcpSocket;
  /**
  * Optional duration in seconds the pod needs to terminate gracefully upon probe failure. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. If this value is nil, the pod's terminationGracePeriodSeconds will be used. Otherwise, this value overrides the value provided by the pod spec. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). This is a beta field and requires enabling ProbeTerminationGracePeriod feature gate. Minimum value is 1. spec.terminationGracePeriodSeconds is used if unset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#termination_grace_period_seconds DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#termination_grace_period_seconds}
  */
  readonly terminationGracePeriodSeconds?: number;
  /**
  * Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#timeout_seconds DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
}

export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerStartupProbeToTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerStartupProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exec: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerStartupProbeExecToTerraform(struct!.exec),
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    grpc: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerStartupProbeGrpcToTerraform(struct!.grpc),
    http_get: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerStartupProbeHttpGetToTerraform(struct!.httpGet),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    tcp_socket: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerStartupProbeTcpSocketToTerraform(struct!.tcpSocket),
    termination_grace_period_seconds: cdktf.numberToTerraform(struct!.terminationGracePeriodSeconds),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
  }
}


export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerStartupProbeToHclTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerStartupProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exec: {
      value: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerStartupProbeExecToHclTerraform(struct!.exec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerStartupProbeExec",
    },
    failure_threshold: {
      value: cdktf.numberToHclTerraform(struct!.failureThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    grpc: {
      value: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerStartupProbeGrpcToHclTerraform(struct!.grpc),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerStartupProbeGrpc",
    },
    http_get: {
      value: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerStartupProbeHttpGetToHclTerraform(struct!.httpGet),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerStartupProbeHttpGet",
    },
    initial_delay_seconds: {
      value: cdktf.numberToHclTerraform(struct!.initialDelaySeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    period_seconds: {
      value: cdktf.numberToHclTerraform(struct!.periodSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    success_threshold: {
      value: cdktf.numberToHclTerraform(struct!.successThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_socket: {
      value: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerStartupProbeTcpSocketToHclTerraform(struct!.tcpSocket),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerStartupProbeTcpSocket",
    },
    termination_grace_period_seconds: {
      value: cdktf.numberToHclTerraform(struct!.terminationGracePeriodSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerStartupProbeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerStartupProbe | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exec = this._exec?.internalValue;
    }
    if (this._failureThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureThreshold = this._failureThreshold;
    }
    if (this._grpc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpc = this._grpc?.internalValue;
    }
    if (this._httpGet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpGet = this._httpGet?.internalValue;
    }
    if (this._initialDelaySeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialDelaySeconds = this._initialDelaySeconds;
    }
    if (this._periodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.periodSeconds = this._periodSeconds;
    }
    if (this._successThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.successThreshold = this._successThreshold;
    }
    if (this._tcpSocket?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSocket = this._tcpSocket?.internalValue;
    }
    if (this._terminationGracePeriodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminationGracePeriodSeconds = this._terminationGracePeriodSeconds;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerStartupProbe | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exec.internalValue = undefined;
      this._failureThreshold = undefined;
      this._grpc.internalValue = undefined;
      this._httpGet.internalValue = undefined;
      this._initialDelaySeconds = undefined;
      this._periodSeconds = undefined;
      this._successThreshold = undefined;
      this._tcpSocket.internalValue = undefined;
      this._terminationGracePeriodSeconds = undefined;
      this._timeoutSeconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exec.internalValue = value.exec;
      this._failureThreshold = value.failureThreshold;
      this._grpc.internalValue = value.grpc;
      this._httpGet.internalValue = value.httpGet;
      this._initialDelaySeconds = value.initialDelaySeconds;
      this._periodSeconds = value.periodSeconds;
      this._successThreshold = value.successThreshold;
      this._tcpSocket.internalValue = value.tcpSocket;
      this._terminationGracePeriodSeconds = value.terminationGracePeriodSeconds;
      this._timeoutSeconds = value.timeoutSeconds;
    }
  }

  // exec - computed: false, optional: true, required: false
  private _exec = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerStartupProbeExecOutputReference(this, "exec");
  public get exec() {
    return this._exec;
  }
  public putExec(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerStartupProbeExec) {
    this._exec.internalValue = value;
  }
  public resetExec() {
    this._exec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execInput() {
    return this._exec.internalValue;
  }

  // failure_threshold - computed: false, optional: true, required: false
  private _failureThreshold?: number; 
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }
  public set failureThreshold(value: number) {
    this._failureThreshold = value;
  }
  public resetFailureThreshold() {
    this._failureThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureThresholdInput() {
    return this._failureThreshold;
  }

  // grpc - computed: false, optional: true, required: false
  private _grpc = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerStartupProbeGrpcOutputReference(this, "grpc");
  public get grpc() {
    return this._grpc;
  }
  public putGrpc(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerStartupProbeGrpc) {
    this._grpc.internalValue = value;
  }
  public resetGrpc() {
    this._grpc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcInput() {
    return this._grpc.internalValue;
  }

  // http_get - computed: false, optional: true, required: false
  private _httpGet = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerStartupProbeHttpGetOutputReference(this, "http_get");
  public get httpGet() {
    return this._httpGet;
  }
  public putHttpGet(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerStartupProbeHttpGet) {
    this._httpGet.internalValue = value;
  }
  public resetHttpGet() {
    this._httpGet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpGetInput() {
    return this._httpGet.internalValue;
  }

  // initial_delay_seconds - computed: false, optional: true, required: false
  private _initialDelaySeconds?: number; 
  public get initialDelaySeconds() {
    return this.getNumberAttribute('initial_delay_seconds');
  }
  public set initialDelaySeconds(value: number) {
    this._initialDelaySeconds = value;
  }
  public resetInitialDelaySeconds() {
    this._initialDelaySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialDelaySecondsInput() {
    return this._initialDelaySeconds;
  }

  // period_seconds - computed: false, optional: true, required: false
  private _periodSeconds?: number; 
  public get periodSeconds() {
    return this.getNumberAttribute('period_seconds');
  }
  public set periodSeconds(value: number) {
    this._periodSeconds = value;
  }
  public resetPeriodSeconds() {
    this._periodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodSecondsInput() {
    return this._periodSeconds;
  }

  // success_threshold - computed: false, optional: true, required: false
  private _successThreshold?: number; 
  public get successThreshold() {
    return this.getNumberAttribute('success_threshold');
  }
  public set successThreshold(value: number) {
    this._successThreshold = value;
  }
  public resetSuccessThreshold() {
    this._successThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successThresholdInput() {
    return this._successThreshold;
  }

  // tcp_socket - computed: false, optional: true, required: false
  private _tcpSocket = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerStartupProbeTcpSocketOutputReference(this, "tcp_socket");
  public get tcpSocket() {
    return this._tcpSocket;
  }
  public putTcpSocket(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerStartupProbeTcpSocket) {
    this._tcpSocket.internalValue = value;
  }
  public resetTcpSocket() {
    this._tcpSocket.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSocketInput() {
    return this._tcpSocket.internalValue;
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

  // timeout_seconds - computed: false, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
  }
}
export interface DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerVolumeDevices {
  /**
  * devicePath is the path inside of the container that the device will be mapped to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#device_path DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#device_path}
  */
  readonly devicePath: string;
  /**
  * name must match the name of a persistentVolumeClaim in the pod
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#name DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerVolumeDevicesToTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerVolumeDevices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_path: cdktf.stringToTerraform(struct!.devicePath),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerVolumeDevicesToHclTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerVolumeDevices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device_path: {
      value: cdktf.stringToHclTerraform(struct!.devicePath),
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

export class DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerVolumeDevicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerVolumeDevices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._devicePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.devicePath = this._devicePath;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerVolumeDevices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._devicePath = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._devicePath = value.devicePath;
      this._name = value.name;
    }
  }

  // device_path - computed: false, optional: false, required: true
  private _devicePath?: string; 
  public get devicePath() {
    return this.getStringAttribute('device_path');
  }
  public set devicePath(value: string) {
    this._devicePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get devicePathInput() {
    return this._devicePath;
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

export class DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerVolumeDevicesList extends cdktf.ComplexList {
  public internalValue? : DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerVolumeDevices[] | cdktf.IResolvable

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
  public get(index: number): DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerVolumeDevicesOutputReference {
    return new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerVolumeDevicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerVolumeMounts {
  /**
  * Path within the container at which the volume should be mounted. Must not contain ':'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#mount_path DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#mount_path}
  */
  readonly mountPath: string;
  /**
  * mountPropagation determines how mounts are propagated from the host to container and the other way around. When not set, MountPropagationNone is used. This field is beta in 1.10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#mount_propagation DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#mount_propagation}
  */
  readonly mountPropagation?: string;
  /**
  * This must match the Name of a Volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#name DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Mounted read-only if true, read-write otherwise (false or unspecified). Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#read_only DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Path within the volume from which the container's volume should be mounted. Defaults to '' (volume's root).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#sub_path DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#sub_path}
  */
  readonly subPath?: string;
  /**
  * Expanded path within the volume from which the container's volume should be mounted. Behaves similarly to SubPath but environment variable references $(VAR_NAME) are expanded using the container's environment. Defaults to '' (volume's root). SubPathExpr and SubPath are mutually exclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#sub_path_expr DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#sub_path_expr}
  */
  readonly subPathExpr?: string;
}

export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerVolumeMountsToTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerVolumeMounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    mount_propagation: cdktf.stringToTerraform(struct!.mountPropagation),
    name: cdktf.stringToTerraform(struct!.name),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    sub_path: cdktf.stringToTerraform(struct!.subPath),
    sub_path_expr: cdktf.stringToTerraform(struct!.subPathExpr),
  }
}


export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerVolumeMountsToHclTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerVolumeMounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mount_path: {
      value: cdktf.stringToHclTerraform(struct!.mountPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount_propagation: {
      value: cdktf.stringToHclTerraform(struct!.mountPropagation),
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
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sub_path: {
      value: cdktf.stringToHclTerraform(struct!.subPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sub_path_expr: {
      value: cdktf.stringToHclTerraform(struct!.subPathExpr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerVolumeMountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerVolumeMounts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    if (this._mountPropagation !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPropagation = this._mountPropagation;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._subPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.subPath = this._subPath;
    }
    if (this._subPathExpr !== undefined) {
      hasAnyValues = true;
      internalValueResult.subPathExpr = this._subPathExpr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerVolumeMounts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mountPath = undefined;
      this._mountPropagation = undefined;
      this._name = undefined;
      this._readOnly = undefined;
      this._subPath = undefined;
      this._subPathExpr = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mountPath = value.mountPath;
      this._mountPropagation = value.mountPropagation;
      this._name = value.name;
      this._readOnly = value.readOnly;
      this._subPath = value.subPath;
      this._subPathExpr = value.subPathExpr;
    }
  }

  // mount_path - computed: false, optional: false, required: true
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
  }

  // mount_propagation - computed: false, optional: true, required: false
  private _mountPropagation?: string; 
  public get mountPropagation() {
    return this.getStringAttribute('mount_propagation');
  }
  public set mountPropagation(value: string) {
    this._mountPropagation = value;
  }
  public resetMountPropagation() {
    this._mountPropagation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPropagationInput() {
    return this._mountPropagation;
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

  // sub_path - computed: false, optional: true, required: false
  private _subPath?: string; 
  public get subPath() {
    return this.getStringAttribute('sub_path');
  }
  public set subPath(value: string) {
    this._subPath = value;
  }
  public resetSubPath() {
    this._subPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subPathInput() {
    return this._subPath;
  }

  // sub_path_expr - computed: false, optional: true, required: false
  private _subPathExpr?: string; 
  public get subPathExpr() {
    return this.getStringAttribute('sub_path_expr');
  }
  public set subPathExpr(value: string) {
    this._subPathExpr = value;
  }
  public resetSubPathExpr() {
    this._subPathExpr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subPathExprInput() {
    return this._subPathExpr;
  }
}

export class DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerVolumeMountsList extends cdktf.ComplexList {
  public internalValue? : DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerVolumeMounts[] | cdktf.IResolvable

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
  public get(index: number): DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerVolumeMountsOutputReference {
    return new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerVolumeMountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainer {
  /**
  * Arguments to the entrypoint. The container image's CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. '$$(VAR_NAME)' will produce the string literal '$(VAR_NAME)'. Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#args DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#args}
  */
  readonly args?: string[];
  /**
  * Entrypoint array. Not executed within a shell. The container image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. '$$(VAR_NAME)' will produce the string literal '$(VAR_NAME)'. Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#command DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#command}
  */
  readonly command?: string[];
  /**
  * List of environment variables to set in the container. Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#env DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#env}
  */
  readonly env?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerEnv[] | cdktf.IResolvable;
  /**
  * List of sources to populate environment variables in the container. The keys defined within a source must be a C_IDENTIFIER. All invalid keys will be reported as an event when the container is starting. When a key exists in multiple sources, the value associated with the last source will take precedence. Values defined by an Env with a duplicate key will take precedence. Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#env_from DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#env_from}
  */
  readonly envFrom?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerEnvFrom[] | cdktf.IResolvable;
  /**
  * Container image name. More info: https://kubernetes.io/docs/concepts/containers/images This field is optional to allow higher level config management to default or override container images in workload controllers like Deployments and StatefulSets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#image DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#image}
  */
  readonly image?: string;
  /**
  * Image pull policy. One of Always, Never, IfNotPresent. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise. Cannot be updated. More info: https://kubernetes.io/docs/concepts/containers/images#updating-images
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#image_pull_policy DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#image_pull_policy}
  */
  readonly imagePullPolicy?: string;
  /**
  * Actions that the management system should take in response to container lifecycle events. Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#lifecycle DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#lifecycle}
  */
  readonly lifecycle?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerLifecycle;
  /**
  * Periodic probe of container liveness. Container will be restarted if the probe fails. Cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#liveness_probe DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#liveness_probe}
  */
  readonly livenessProbe?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerLivenessProbe;
  /**
  * Name of the container specified as a DNS_LABEL. Each container in a pod must have a unique name (DNS_LABEL). Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#name DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * List of ports to expose from the container. Not specifying a port here DOES NOT prevent that port from being exposed. Any port which is listening on the default '0.0.0.0' address inside a container will be accessible from the network. Modifying this array with strategic merge patch may corrupt the data. For more information See https://github.com/kubernetes/kubernetes/issues/108255. Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#ports DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#ports}
  */
  readonly ports?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerPorts[] | cdktf.IResolvable;
  /**
  * Periodic probe of container service readiness. Container will be removed from service endpoints if the probe fails. Cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#readiness_probe DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#readiness_probe}
  */
  readonly readinessProbe?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerReadinessProbe;
  /**
  * Resources resize policy for the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#resize_policy DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#resize_policy}
  */
  readonly resizePolicy?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerResizePolicy[] | cdktf.IResolvable;
  /**
  * Compute Resources required by this container. Cannot be updated. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#resources DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerResources;
  /**
  * RestartPolicy defines the restart behavior of individual containers in a pod. This field may only be set for init containers, and the only allowed value is 'Always'. For non-init containers or when this field is not specified, the restart behavior is defined by the Pod's restart policy and the container type. Setting the RestartPolicy as 'Always' for the init container will have the following effect: this init container will be continually restarted on exit until all regular containers have terminated. Once all regular containers have completed, all init containers with restartPolicy 'Always' will be shut down. This lifecycle differs from normal init containers and is often referred to as a 'sidecar' container. Although this init container still starts in the init container sequence, it does not wait for the container to complete before proceeding to the next init container. Instead, the next init container starts immediately after this init container is started, or after any startupProbe has successfully completed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#restart_policy DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#restart_policy}
  */
  readonly restartPolicy?: string;
  /**
  * SecurityContext defines the security options the container should be run with. If set, the fields of SecurityContext override the equivalent fields of PodSecurityContext. More info: https://kubernetes.io/docs/tasks/configure-pod-container/security-context/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#security_context DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#security_context}
  */
  readonly securityContext?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerSecurityContext;
  /**
  * StartupProbe indicates that the Pod has successfully initialized. If specified, no other probes are executed until this completes successfully. If this probe fails, the Pod will be restarted, just as if the livenessProbe failed. This can be used to provide different probe parameters at the beginning of a Pod's lifecycle, when it might take a long time to load data or warm a cache, than during steady-state operation. This cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#startup_probe DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#startup_probe}
  */
  readonly startupProbe?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerStartupProbe;
  /**
  * Whether this container should allocate a buffer for stdin in the container runtime. If this is not set, reads from stdin in the container will always result in EOF. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#stdin DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#stdin}
  */
  readonly stdin?: boolean | cdktf.IResolvable;
  /**
  * Whether the container runtime should close the stdin channel after it has been opened by a single attach. When stdin is true the stdin stream will remain open across multiple attach sessions. If stdinOnce is set to true, stdin is opened on container start, is empty until the first client attaches to stdin, and then remains open and accepts data until the client disconnects, at which time stdin is closed and remains closed until the container is restarted. If this flag is false, a container processes that reads from stdin will never receive an EOF. Default is false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#stdin_once DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#stdin_once}
  */
  readonly stdinOnce?: boolean | cdktf.IResolvable;
  /**
  * Optional: Path at which the file to which the container's termination message will be written is mounted into the container's filesystem. Message written is intended to be brief final status, such as an assertion failure message. Will be truncated by the node if greater than 4096 bytes. The total message length across all containers will be limited to 12kb. Defaults to /dev/termination-log. Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#termination_message_path DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#termination_message_path}
  */
  readonly terminationMessagePath?: string;
  /**
  * Indicate how the termination message should be populated. File will use the contents of terminationMessagePath to populate the container status message on both success and failure. FallbackToLogsOnError will use the last chunk of container log output if the termination message file is empty and the container exited with an error. The log output is limited to 2048 bytes or 80 lines, whichever is smaller. Defaults to File. Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#termination_message_policy DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#termination_message_policy}
  */
  readonly terminationMessagePolicy?: string;
  /**
  * Whether this container should allocate a TTY for itself, also requires 'stdin' to be true. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#tty DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#tty}
  */
  readonly tty?: boolean | cdktf.IResolvable;
  /**
  * volumeDevices is the list of block devices to be used by the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#volume_devices DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#volume_devices}
  */
  readonly volumeDevices?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerVolumeDevices[] | cdktf.IResolvable;
  /**
  * Pod volumes to mount into the container's filesystem. Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#volume_mounts DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#volume_mounts}
  */
  readonly volumeMounts?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerVolumeMounts[] | cdktf.IResolvable;
  /**
  * Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image. Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#working_dir DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#working_dir}
  */
  readonly workingDir?: string;
}

export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerToTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.args),
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
    env: cdktf.listMapper(dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerEnvToTerraform, false)(struct!.env),
    env_from: cdktf.listMapper(dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerEnvFromToTerraform, false)(struct!.envFrom),
    image: cdktf.stringToTerraform(struct!.image),
    image_pull_policy: cdktf.stringToTerraform(struct!.imagePullPolicy),
    lifecycle: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerLifecycleToTerraform(struct!.lifecycle),
    liveness_probe: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerLivenessProbeToTerraform(struct!.livenessProbe),
    name: cdktf.stringToTerraform(struct!.name),
    ports: cdktf.listMapper(dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerPortsToTerraform, false)(struct!.ports),
    readiness_probe: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerReadinessProbeToTerraform(struct!.readinessProbe),
    resize_policy: cdktf.listMapper(dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerResizePolicyToTerraform, false)(struct!.resizePolicy),
    resources: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerResourcesToTerraform(struct!.resources),
    restart_policy: cdktf.stringToTerraform(struct!.restartPolicy),
    security_context: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerSecurityContextToTerraform(struct!.securityContext),
    startup_probe: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerStartupProbeToTerraform(struct!.startupProbe),
    stdin: cdktf.booleanToTerraform(struct!.stdin),
    stdin_once: cdktf.booleanToTerraform(struct!.stdinOnce),
    termination_message_path: cdktf.stringToTerraform(struct!.terminationMessagePath),
    termination_message_policy: cdktf.stringToTerraform(struct!.terminationMessagePolicy),
    tty: cdktf.booleanToTerraform(struct!.tty),
    volume_devices: cdktf.listMapper(dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerVolumeDevicesToTerraform, false)(struct!.volumeDevices),
    volume_mounts: cdktf.listMapper(dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerVolumeMountsToTerraform, false)(struct!.volumeMounts),
    working_dir: cdktf.stringToTerraform(struct!.workingDir),
  }
}


export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerToHclTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainer | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerEnvToHclTerraform, false)(struct!.env),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerEnvList",
    },
    env_from: {
      value: cdktf.listMapperHcl(dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerEnvFromToHclTerraform, false)(struct!.envFrom),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerEnvFromList",
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
      value: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerLifecycleToHclTerraform(struct!.lifecycle),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerLifecycle",
    },
    liveness_probe: {
      value: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerLivenessProbeToHclTerraform(struct!.livenessProbe),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerLivenessProbe",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ports: {
      value: cdktf.listMapperHcl(dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerPortsToHclTerraform, false)(struct!.ports),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerPortsList",
    },
    readiness_probe: {
      value: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerReadinessProbeToHclTerraform(struct!.readinessProbe),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerReadinessProbe",
    },
    resize_policy: {
      value: cdktf.listMapperHcl(dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerResizePolicyToHclTerraform, false)(struct!.resizePolicy),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerResizePolicyList",
    },
    resources: {
      value: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerResources",
    },
    restart_policy: {
      value: cdktf.stringToHclTerraform(struct!.restartPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_context: {
      value: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerSecurityContextToHclTerraform(struct!.securityContext),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerSecurityContext",
    },
    startup_probe: {
      value: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerStartupProbeToHclTerraform(struct!.startupProbe),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerStartupProbe",
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
      value: cdktf.listMapperHcl(dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerVolumeDevicesToHclTerraform, false)(struct!.volumeDevices),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerVolumeDevicesList",
    },
    volume_mounts: {
      value: cdktf.listMapperHcl(dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerVolumeMountsToHclTerraform, false)(struct!.volumeMounts),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerVolumeMountsList",
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

export class DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainer | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainer | cdktf.IResolvable | undefined) {
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
  private _env = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerEnvList(this, "env", false);
  public get env() {
    return this._env;
  }
  public putEnv(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerEnv[] | cdktf.IResolvable) {
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
  private _envFrom = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerEnvFromList(this, "env_from", false);
  public get envFrom() {
    return this._envFrom;
  }
  public putEnvFrom(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerEnvFrom[] | cdktf.IResolvable) {
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
  private _lifecycle = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerLifecycleOutputReference(this, "lifecycle");
  public get lifecycle() {
    return this._lifecycle;
  }
  public putLifecycle(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerLifecycle) {
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
  private _livenessProbe = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerLivenessProbeOutputReference(this, "liveness_probe");
  public get livenessProbe() {
    return this._livenessProbe;
  }
  public putLivenessProbe(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerLivenessProbe) {
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
  private _ports = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerPortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }
  public putPorts(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerPorts[] | cdktf.IResolvable) {
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
  private _readinessProbe = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerReadinessProbeOutputReference(this, "readiness_probe");
  public get readinessProbe() {
    return this._readinessProbe;
  }
  public putReadinessProbe(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerReadinessProbe) {
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
  private _resizePolicy = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerResizePolicyList(this, "resize_policy", false);
  public get resizePolicy() {
    return this._resizePolicy;
  }
  public putResizePolicy(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerResizePolicy[] | cdktf.IResolvable) {
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
  private _resources = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerResources) {
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
  private _securityContext = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerSecurityContextOutputReference(this, "security_context");
  public get securityContext() {
    return this._securityContext;
  }
  public putSecurityContext(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerSecurityContext) {
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
  private _startupProbe = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerStartupProbeOutputReference(this, "startup_probe");
  public get startupProbe() {
    return this._startupProbe;
  }
  public putStartupProbe(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerStartupProbe) {
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
  private _volumeDevices = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerVolumeDevicesList(this, "volume_devices", false);
  public get volumeDevices() {
    return this._volumeDevices;
  }
  public putVolumeDevices(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerVolumeDevices[] | cdktf.IResolvable) {
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
  private _volumeMounts = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerVolumeMountsList(this, "volume_mounts", false);
  public get volumeMounts() {
    return this._volumeMounts;
  }
  public putVolumeMounts(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerVolumeMounts[] | cdktf.IResolvable) {
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
export interface DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesAwsElasticBlockStore {
  /**
  * fsType is the filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore TODO: how do we prevent errors in the filesystem from compromising the machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#fs_type DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * partition is the partition in the volume that you want to mount. If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as '1'. Similarly, the volume partition for /dev/sda is '0' (or you can leave the property empty).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#partition DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#partition}
  */
  readonly partition?: number;
  /**
  * readOnly value true will force the readOnly setting in VolumeMounts. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#read_only DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * volumeID is unique ID of the persistent disk resource in AWS (Amazon EBS volume). More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#volume_id DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#volume_id}
  */
  readonly volumeId: string;
}

export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesAwsElasticBlockStoreToTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesAwsElasticBlockStore | cdktf.IResolvable): any {
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


export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesAwsElasticBlockStoreToHclTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesAwsElasticBlockStore | cdktf.IResolvable): any {
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

export class DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesAwsElasticBlockStoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesAwsElasticBlockStore | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesAwsElasticBlockStore | cdktf.IResolvable | undefined) {
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
export interface DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesAzureDisk {
  /**
  * cachingMode is the Host Caching mode: None, Read Only, Read Write.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#caching_mode DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#caching_mode}
  */
  readonly cachingMode?: string;
  /**
  * diskName is the Name of the data disk in the blob storage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#disk_name DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#disk_name}
  */
  readonly diskName: string;
  /**
  * diskURI is the URI of data disk in the blob storage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#disk_uri DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#disk_uri}
  */
  readonly diskUri: string;
  /**
  * fsType is Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#fs_type DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * kind expected values are Shared: multiple blob disks per storage account Dedicated: single blob disk per storage account Managed: azure managed data disk (only in managed availability set). defaults to shared
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#kind DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * readOnly Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#read_only DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
}

export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesAzureDiskToTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesAzureDisk | cdktf.IResolvable): any {
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


export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesAzureDiskToHclTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesAzureDisk | cdktf.IResolvable): any {
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

export class DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesAzureDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesAzureDisk | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesAzureDisk | cdktf.IResolvable | undefined) {
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
export interface DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesAzureFile {
  /**
  * readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#read_only DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * secretName is the name of secret that contains Azure Storage Account Name and Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#secret_name DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#secret_name}
  */
  readonly secretName: string;
  /**
  * shareName is the azure share Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#share_name DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#share_name}
  */
  readonly shareName: string;
}

export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesAzureFileToTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesAzureFile | cdktf.IResolvable): any {
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


export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesAzureFileToHclTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesAzureFile | cdktf.IResolvable): any {
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

export class DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesAzureFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesAzureFile | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesAzureFile | cdktf.IResolvable | undefined) {
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
export interface DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesCephfsSecretRef {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#name DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesCephfsSecretRefToTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesCephfsSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesCephfsSecretRefToHclTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesCephfsSecretRef | cdktf.IResolvable): any {
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

export class DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesCephfsSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesCephfsSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesCephfsSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesCephfs {
  /**
  * monitors is Required: Monitors is a collection of Ceph monitors More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#monitors DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#monitors}
  */
  readonly monitors: string[];
  /**
  * path is Optional: Used as the mounted root, rather than the full Ceph tree, default is /
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#path DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#path}
  */
  readonly path?: string;
  /**
  * readOnly is Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#read_only DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * secretFile is Optional: SecretFile is the path to key ring for User, default is /etc/ceph/user.secret More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#secret_file DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#secret_file}
  */
  readonly secretFile?: string;
  /**
  * secretRef is Optional: SecretRef is reference to the authentication secret for User, default is empty. More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#secret_ref DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesCephfsSecretRef;
  /**
  * user is optional: User is the rados user name, default is admin More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#user DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#user}
  */
  readonly user?: string;
}

export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesCephfsToTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesCephfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    monitors: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.monitors),
    path: cdktf.stringToTerraform(struct!.path),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_file: cdktf.stringToTerraform(struct!.secretFile),
    secret_ref: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesCephfsSecretRefToTerraform(struct!.secretRef),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesCephfsToHclTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesCephfs | cdktf.IResolvable): any {
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
      value: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesCephfsSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesCephfsSecretRef",
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

export class DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesCephfsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesCephfs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesCephfs | cdktf.IResolvable | undefined) {
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
  private _secretRef = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesCephfsSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesCephfsSecretRef) {
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
export interface DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesCinderSecretRef {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#name DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesCinderSecretRefToTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesCinderSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesCinderSecretRefToHclTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesCinderSecretRef | cdktf.IResolvable): any {
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

export class DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesCinderSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesCinderSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesCinderSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesCinder {
  /**
  * fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Examples: 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified. More info: https://examples.k8s.io/mysql-cinder-pd/README.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#fs_type DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: https://examples.k8s.io/mysql-cinder-pd/README.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#read_only DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * secretRef is optional: points to a secret object containing parameters used to connect to OpenStack.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#secret_ref DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesCinderSecretRef;
  /**
  * volumeID used to identify the volume in cinder. More info: https://examples.k8s.io/mysql-cinder-pd/README.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#volume_id DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#volume_id}
  */
  readonly volumeId: string;
}

export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesCinderToTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesCinder | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_ref: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesCinderSecretRefToTerraform(struct!.secretRef),
    volume_id: cdktf.stringToTerraform(struct!.volumeId),
  }
}


export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesCinderToHclTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesCinder | cdktf.IResolvable): any {
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
      value: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesCinderSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesCinderSecretRef",
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

export class DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesCinderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesCinder | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesCinder | cdktf.IResolvable | undefined) {
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
  private _secretRef = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesCinderSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesCinderSecretRef) {
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
export interface DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesConfigMapItems {
  /**
  * key is the key to project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#key DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * mode is Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#mode DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#mode}
  */
  readonly mode?: number;
  /**
  * path is the relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#path DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesConfigMapItemsToTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesConfigMapItems | cdktf.IResolvable): any {
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


export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesConfigMapItemsToHclTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesConfigMapItems | cdktf.IResolvable): any {
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

export class DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesConfigMapItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesConfigMapItems | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesConfigMapItems | cdktf.IResolvable | undefined) {
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

export class DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesConfigMapItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesConfigMapItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesConfigMapItemsOutputReference {
    return new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesConfigMapItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesConfigMap {
  /**
  * defaultMode is optional: mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#default_mode DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#default_mode}
  */
  readonly defaultMode?: number;
  /**
  * items if unspecified, each key-value pair in the Data field of the referenced ConfigMap will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the ConfigMap, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#items DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#items}
  */
  readonly items?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesConfigMapItems[] | cdktf.IResolvable;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#name DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * optional specify whether the ConfigMap or its keys must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#optional DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesConfigMapToTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_mode: cdktf.numberToTerraform(struct!.defaultMode),
    items: cdktf.listMapper(dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesConfigMapItemsToTerraform, false)(struct!.items),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesConfigMapToHclTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesConfigMap | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesConfigMapItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesConfigMapItemsList",
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

export class DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesConfigMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesConfigMap | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesConfigMap | cdktf.IResolvable | undefined) {
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
  private _items = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesConfigMapItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesConfigMapItems[] | cdktf.IResolvable) {
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
export interface DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesCsiNodePublishSecretRef {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#name DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesCsiNodePublishSecretRefToTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesCsiNodePublishSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesCsiNodePublishSecretRefToHclTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesCsiNodePublishSecretRef | cdktf.IResolvable): any {
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

export class DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesCsiNodePublishSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesCsiNodePublishSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesCsiNodePublishSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesCsi {
  /**
  * driver is the name of the CSI driver that handles this volume. Consult with your admin for the correct name as registered in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#driver DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#driver}
  */
  readonly driver: string;
  /**
  * fsType to mount. Ex. 'ext4', 'xfs', 'ntfs'. If not provided, the empty value is passed to the associated CSI driver which will determine the default filesystem to apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#fs_type DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * nodePublishSecretRef is a reference to the secret object containing sensitive information to pass to the CSI driver to complete the CSI NodePublishVolume and NodeUnpublishVolume calls. This field is optional, and may be empty if no secret is required. If the secret object contains more than one secret, all secret references are passed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#node_publish_secret_ref DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#node_publish_secret_ref}
  */
  readonly nodePublishSecretRef?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesCsiNodePublishSecretRef;
  /**
  * readOnly specifies a read-only configuration for the volume. Defaults to false (read/write).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#read_only DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * volumeAttributes stores driver-specific properties that are passed to the CSI driver. Consult your driver's documentation for supported values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#volume_attributes DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#volume_attributes}
  */
  readonly volumeAttributes?: { [key: string]: string };
}

export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesCsiToTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesCsi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    driver: cdktf.stringToTerraform(struct!.driver),
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    node_publish_secret_ref: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesCsiNodePublishSecretRefToTerraform(struct!.nodePublishSecretRef),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    volume_attributes: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.volumeAttributes),
  }
}


export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesCsiToHclTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesCsi | cdktf.IResolvable): any {
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
      value: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesCsiNodePublishSecretRefToHclTerraform(struct!.nodePublishSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesCsiNodePublishSecretRef",
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

export class DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesCsiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesCsi | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesCsi | cdktf.IResolvable | undefined) {
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
  private _nodePublishSecretRef = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesCsiNodePublishSecretRefOutputReference(this, "node_publish_secret_ref");
  public get nodePublishSecretRef() {
    return this._nodePublishSecretRef;
  }
  public putNodePublishSecretRef(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesCsiNodePublishSecretRef) {
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
export interface DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesDownwardApiItemsFieldRef {
  /**
  * Version of the schema the FieldPath is written in terms of, defaults to 'v1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#api_version DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Path of the field to select in the specified API version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#field_path DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#field_path}
  */
  readonly fieldPath: string;
}

export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesDownwardApiItemsFieldRefToTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesDownwardApiItemsFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}


export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesDownwardApiItemsFieldRefToHclTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesDownwardApiItemsFieldRef | cdktf.IResolvable): any {
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

export class DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesDownwardApiItemsFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesDownwardApiItemsFieldRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesDownwardApiItemsFieldRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesDownwardApiItemsResourceFieldRef {
  /**
  * Container name: required for volumes, optional for env vars
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#container_name DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#container_name}
  */
  readonly containerName?: string;
  /**
  * Specifies the output format of the exposed resources, defaults to '1'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#divisor DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#divisor}
  */
  readonly divisor?: string;
  /**
  * Required: resource to select
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#resource DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#resource}
  */
  readonly resource: string;
}

export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesDownwardApiItemsResourceFieldRefToTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesDownwardApiItemsResourceFieldRef | cdktf.IResolvable): any {
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


export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesDownwardApiItemsResourceFieldRefToHclTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesDownwardApiItemsResourceFieldRef | cdktf.IResolvable): any {
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

export class DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesDownwardApiItemsResourceFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesDownwardApiItemsResourceFieldRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesDownwardApiItemsResourceFieldRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesDownwardApiItems {
  /**
  * Required: Selects a field of the pod: only annotations, labels, name and namespace are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#field_ref DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#field_ref}
  */
  readonly fieldRef?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesDownwardApiItemsFieldRef;
  /**
  * Optional: mode bits used to set permissions on this file, must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#mode DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#mode}
  */
  readonly mode?: number;
  /**
  * Required: Path is the relative path name of the file to be created. Must not be absolute or contain the '..' path. Must be utf-8 encoded. The first item of the relative path must not start with '..'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#path DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#path}
  */
  readonly path: string;
  /**
  * Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, requests.cpu and requests.memory) are currently supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#resource_field_ref DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#resource_field_ref}
  */
  readonly resourceFieldRef?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesDownwardApiItemsResourceFieldRef;
}

export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesDownwardApiItemsToTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesDownwardApiItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_ref: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesDownwardApiItemsFieldRefToTerraform(struct!.fieldRef),
    mode: cdktf.numberToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
    resource_field_ref: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesDownwardApiItemsResourceFieldRefToTerraform(struct!.resourceFieldRef),
  }
}


export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesDownwardApiItemsToHclTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesDownwardApiItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_ref: {
      value: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesDownwardApiItemsFieldRefToHclTerraform(struct!.fieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesDownwardApiItemsFieldRef",
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
      value: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesDownwardApiItemsResourceFieldRefToHclTerraform(struct!.resourceFieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesDownwardApiItemsResourceFieldRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesDownwardApiItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesDownwardApiItems | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesDownwardApiItems | cdktf.IResolvable | undefined) {
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
  private _fieldRef = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesDownwardApiItemsFieldRefOutputReference(this, "field_ref");
  public get fieldRef() {
    return this._fieldRef;
  }
  public putFieldRef(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesDownwardApiItemsFieldRef) {
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
  private _resourceFieldRef = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesDownwardApiItemsResourceFieldRefOutputReference(this, "resource_field_ref");
  public get resourceFieldRef() {
    return this._resourceFieldRef;
  }
  public putResourceFieldRef(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesDownwardApiItemsResourceFieldRef) {
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

export class DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesDownwardApiItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesDownwardApiItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesDownwardApiItemsOutputReference {
    return new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesDownwardApiItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesDownwardApi {
  /**
  * Optional: mode bits to use on created files by default. Must be a Optional: mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#default_mode DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#default_mode}
  */
  readonly defaultMode?: number;
  /**
  * Items is a list of downward API volume file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#items DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#items}
  */
  readonly items?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesDownwardApiItems[] | cdktf.IResolvable;
}

export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesDownwardApiToTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesDownwardApi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_mode: cdktf.numberToTerraform(struct!.defaultMode),
    items: cdktf.listMapper(dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesDownwardApiItemsToTerraform, false)(struct!.items),
  }
}


export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesDownwardApiToHclTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesDownwardApi | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesDownwardApiItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesDownwardApiItemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesDownwardApiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesDownwardApi | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesDownwardApi | cdktf.IResolvable | undefined) {
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
  private _items = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesDownwardApiItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesDownwardApiItems[] | cdktf.IResolvable) {
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
export interface DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEmptyDir {
  /**
  * medium represents what type of storage medium should back this directory. The default is '' which means to use the node's default medium. Must be an empty string (default) or Memory. More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#medium DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#medium}
  */
  readonly medium?: string;
  /**
  * sizeLimit is the total amount of local storage required for this EmptyDir volume. The size limit is also applicable for memory medium. The maximum usage on memory medium EmptyDir would be the minimum value between the SizeLimit specified here and the sum of memory limits of all containers in a pod. The default is nil which means that the limit is undefined. More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#size_limit DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#size_limit}
  */
  readonly sizeLimit?: string;
}

export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEmptyDirToTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEmptyDir | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    medium: cdktf.stringToTerraform(struct!.medium),
    size_limit: cdktf.stringToTerraform(struct!.sizeLimit),
  }
}


export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEmptyDirToHclTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEmptyDir | cdktf.IResolvable): any {
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

export class DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEmptyDirOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEmptyDir | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEmptyDir | cdktf.IResolvable | undefined) {
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
export interface DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpecDataSource {
  /**
  * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#api_group DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#api_group}
  */
  readonly apiGroup?: string;
  /**
  * Kind is the type of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#kind DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name is the name of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#name DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpecDataSourceToTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpecDataSource | cdktf.IResolvable): any {
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


export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpecDataSourceToHclTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpecDataSource | cdktf.IResolvable): any {
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

export class DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpecDataSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpecDataSource | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpecDataSource | cdktf.IResolvable | undefined) {
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
export interface DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpecDataSourceRef {
  /**
  * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#api_group DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#api_group}
  */
  readonly apiGroup?: string;
  /**
  * Kind is the type of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#kind DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name is the name of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#name DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace is the namespace of resource being referenced Note that when a namespace is specified, a gateway.networking.k8s.io/ReferenceGrant object is required in the referent namespace to allow that namespace's owner to accept the reference. See the ReferenceGrant documentation for details. (Alpha) This field requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#namespace DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpecDataSourceRefToTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpecDataSourceRef | cdktf.IResolvable): any {
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


export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpecDataSourceRefToHclTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpecDataSourceRef | cdktf.IResolvable): any {
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

export class DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpecDataSourceRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpecDataSourceRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpecDataSourceRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpecResourcesClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#name DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpecResourcesClaimsToTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpecResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpecResourcesClaimsToHclTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpecResourcesClaims | cdktf.IResolvable): any {
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

export class DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpecResourcesClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpecResourcesClaims | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpecResourcesClaims | cdktf.IResolvable | undefined) {
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

export class DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpecResourcesClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpecResourcesClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpecResourcesClaimsOutputReference {
    return new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpecResourcesClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpecResources {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#claims DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#claims}
  */
  readonly claims?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpecResourcesClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#limits DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#requests DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpecResourcesToTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpecResourcesClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpecResourcesToHclTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpecResourcesClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpecResourcesClaimsList",
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

export class DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpecResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpecResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpecResources | cdktf.IResolvable | undefined) {
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
  private _claims = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpecResourcesClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpecResourcesClaims[] | cdktf.IResolvable) {
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
export interface DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#key DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#operator DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#values DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsToTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsToHclTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsOutputReference {
    return new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpecSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#match_expressions DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#match_labels DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpecSelectorToTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpecSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpecSelectorToHclTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpecSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsList",
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

export class DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpecSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpecSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpecSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpec {
  /**
  * accessModes contains the desired access modes the volume should have. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#access_modes DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#access_modes}
  */
  readonly accessModes?: string[];
  /**
  * dataSource field can be used to specify either: * An existing VolumeSnapshot object (snapshot.storage.k8s.io/VolumeSnapshot) * An existing PVC (PersistentVolumeClaim) If the provisioner or an external controller can support the specified data source, it will create a new volume based on the contents of the specified data source. When the AnyVolumeDataSource feature gate is enabled, dataSource contents will be copied to dataSourceRef, and dataSourceRef contents will be copied to dataSource when dataSourceRef.namespace is not specified. If the namespace is specified, then dataSourceRef will not be copied to dataSource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#data_source DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#data_source}
  */
  readonly dataSource?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpecDataSource;
  /**
  * dataSourceRef specifies the object from which to populate the volume with data, if a non-empty volume is desired. This may be any object from a non-empty API group (non core object) or a PersistentVolumeClaim object. When this field is specified, volume binding will only succeed if the type of the specified object matches some installed volume populator or dynamic provisioner. This field will replace the functionality of the dataSource field and as such if both fields are non-empty, they must have the same value. For backwards compatibility, when namespace isn't specified in dataSourceRef, both fields (dataSource and dataSourceRef) will be set to the same value automatically if one of them is empty and the other is non-empty. When namespace is specified in dataSourceRef, dataSource isn't set to the same value and must be empty. There are three important differences between dataSource and dataSourceRef: * While dataSource only allows two specific types of objects, dataSourceRef allows any non-core object, as well as PersistentVolumeClaim objects. * While dataSource ignores disallowed values (dropping them), dataSourceRef preserves all values, and generates an error if a disallowed value is specified. * While dataSource only allows local objects, dataSourceRef allows objects in any namespaces. (Beta) Using this field requires the AnyVolumeDataSource feature gate to be enabled. (Alpha) Using the namespace field of dataSourceRef requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#data_source_ref DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#data_source_ref}
  */
  readonly dataSourceRef?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpecDataSourceRef;
  /**
  * resources represents the minimum resources the volume should have. If RecoverVolumeExpansionFailure feature is enabled users are allowed to specify resource requirements that are lower than previous value but must still be higher than capacity recorded in the status field of the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#resources DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpecResources;
  /**
  * selector is a label query over volumes to consider for binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#selector DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#selector}
  */
  readonly selector?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpecSelector;
  /**
  * storageClassName is the name of the StorageClass required by the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#storage_class_name DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#storage_class_name}
  */
  readonly storageClassName?: string;
  /**
  * volumeMode defines what type of volume is required by the claim. Value of Filesystem is implied when not included in claim spec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#volume_mode DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#volume_mode}
  */
  readonly volumeMode?: string;
  /**
  * volumeName is the binding reference to the PersistentVolume backing this claim.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#volume_name DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#volume_name}
  */
  readonly volumeName?: string;
}

export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpecToTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_modes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accessModes),
    data_source: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpecDataSourceToTerraform(struct!.dataSource),
    data_source_ref: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpecDataSourceRefToTerraform(struct!.dataSourceRef),
    resources: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpecResourcesToTerraform(struct!.resources),
    selector: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpecSelectorToTerraform(struct!.selector),
    storage_class_name: cdktf.stringToTerraform(struct!.storageClassName),
    volume_mode: cdktf.stringToTerraform(struct!.volumeMode),
    volume_name: cdktf.stringToTerraform(struct!.volumeName),
  }
}


export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpecToHclTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpec | cdktf.IResolvable): any {
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
      value: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpecDataSourceToHclTerraform(struct!.dataSource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpecDataSource",
    },
    data_source_ref: {
      value: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpecDataSourceRefToHclTerraform(struct!.dataSourceRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpecDataSourceRef",
    },
    resources: {
      value: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpecResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpecResources",
    },
    selector: {
      value: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpecSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpecSelector",
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

export class DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpec | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpec | cdktf.IResolvable | undefined) {
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
  private _dataSource = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpecDataSourceOutputReference(this, "data_source");
  public get dataSource() {
    return this._dataSource;
  }
  public putDataSource(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpecDataSource) {
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
  private _dataSourceRef = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpecDataSourceRefOutputReference(this, "data_source_ref");
  public get dataSourceRef() {
    return this._dataSourceRef;
  }
  public putDataSourceRef(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpecDataSourceRef) {
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
  private _resources = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpecResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpecResources) {
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
  private _selector = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpecSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpecSelector) {
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
export interface DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplate {
  /**
  * May contain labels and annotations that will be copied into the PVC when creating it. No other fields are allowed and will be rejected during validation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#metadata DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * The specification for the PersistentVolumeClaim. The entire content is copied unchanged into the PVC that gets created from this template. The same fields as in a PersistentVolumeClaim are also valid here.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#spec DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#spec}
  */
  readonly spec: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpec;
}

export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateToTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.metadata),
    spec: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpecToTerraform(struct!.spec),
  }
}


export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateToHclTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.metadata),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    spec: {
      value: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpec",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    if (this._spec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metadata = undefined;
      this._spec.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metadata = value.metadata;
      this._spec.internalValue = value.spec;
    }
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateSpec) {
    this._spec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }
}
export interface DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeral {
  /**
  * Will be used to create a stand-alone PVC to provision the volume. The pod in which this EphemeralVolumeSource is embedded will be the owner of the PVC, i.e. the PVC will be deleted together with the pod. The name of the PVC will be '<pod name>-<volume name>' where '<volume name>' is the name from the 'PodSpec.Volumes' array entry. Pod validation will reject the pod if the concatenated name is not valid for a PVC (for example, too long). An existing PVC with that name that is not owned by the pod will *not* be used for the pod to avoid using an unrelated volume by mistake. Starting the pod is then blocked until the unrelated PVC is removed. If such a pre-created PVC is meant to be used by the pod, the PVC has to updated with an owner reference to the pod once the pod exists. Normally this should not be necessary, but it may be useful when manually reconstructing a broken cluster. This field is read-only and no changes will be made by Kubernetes to the PVC after it has been created. Required, must not be nil.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#volume_claim_template DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#volume_claim_template}
  */
  readonly volumeClaimTemplate?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplate;
}

export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralToTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeral | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    volume_claim_template: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateToTerraform(struct!.volumeClaimTemplate),
  }
}


export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralToHclTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeral | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    volume_claim_template: {
      value: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateToHclTerraform(struct!.volumeClaimTemplate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplate",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeral | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeral | cdktf.IResolvable | undefined) {
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
  private _volumeClaimTemplate = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplateOutputReference(this, "volume_claim_template");
  public get volumeClaimTemplate() {
    return this._volumeClaimTemplate;
  }
  public putVolumeClaimTemplate(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralVolumeClaimTemplate) {
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
export interface DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesFc {
  /**
  * fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified. TODO: how do we prevent errors in the filesystem from compromising the machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#fs_type DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * lun is Optional: FC target lun number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#lun DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#lun}
  */
  readonly lun?: number;
  /**
  * readOnly is Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#read_only DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * targetWWNs is Optional: FC target worldwide names (WWNs)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#target_ww_ns DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#target_ww_ns}
  */
  readonly targetWwNs?: string[];
  /**
  * wwids Optional: FC volume world wide identifiers (wwids) Either wwids or combination of targetWWNs and lun must be set, but not both simultaneously.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#wwids DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#wwids}
  */
  readonly wwids?: string[];
}

export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesFcToTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesFc | cdktf.IResolvable): any {
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


export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesFcToHclTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesFc | cdktf.IResolvable): any {
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

export class DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesFcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesFc | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesFc | cdktf.IResolvable | undefined) {
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
export interface DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesFlexVolumeSecretRef {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#name DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesFlexVolumeSecretRefToTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesFlexVolumeSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesFlexVolumeSecretRefToHclTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesFlexVolumeSecretRef | cdktf.IResolvable): any {
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

export class DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesFlexVolumeSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesFlexVolumeSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesFlexVolumeSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesFlexVolume {
  /**
  * driver is the name of the driver to use for this volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#driver DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#driver}
  */
  readonly driver: string;
  /**
  * fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. 'ext4', 'xfs', 'ntfs'. The default filesystem depends on FlexVolume script.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#fs_type DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * options is Optional: this field holds extra command options if any.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#options DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#options}
  */
  readonly options?: { [key: string]: string };
  /**
  * readOnly is Optional: defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#read_only DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * secretRef is Optional: secretRef is reference to the secret object containing sensitive information to pass to the plugin scripts. This may be empty if no secret object is specified. If the secret object contains more than one secret, all secrets are passed to the plugin scripts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#secret_ref DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesFlexVolumeSecretRef;
}

export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesFlexVolumeToTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesFlexVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    driver: cdktf.stringToTerraform(struct!.driver),
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    options: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.options),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_ref: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesFlexVolumeSecretRefToTerraform(struct!.secretRef),
  }
}


export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesFlexVolumeToHclTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesFlexVolume | cdktf.IResolvable): any {
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
      value: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesFlexVolumeSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesFlexVolumeSecretRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesFlexVolumeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesFlexVolume | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesFlexVolume | cdktf.IResolvable | undefined) {
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
  private _secretRef = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesFlexVolumeSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesFlexVolumeSecretRef) {
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
export interface DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesFlocker {
  /**
  * datasetName is Name of the dataset stored as metadata -> name on the dataset for Flocker should be considered as deprecated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#dataset_name DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#dataset_name}
  */
  readonly datasetName?: string;
  /**
  * datasetUUID is the UUID of the dataset. This is unique identifier of a Flocker dataset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#dataset_uuid DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#dataset_uuid}
  */
  readonly datasetUuid?: string;
}

export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesFlockerToTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesFlocker | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataset_name: cdktf.stringToTerraform(struct!.datasetName),
    dataset_uuid: cdktf.stringToTerraform(struct!.datasetUuid),
  }
}


export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesFlockerToHclTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesFlocker | cdktf.IResolvable): any {
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

export class DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesFlockerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesFlocker | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesFlocker | cdktf.IResolvable | undefined) {
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
export interface DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesGcePersistentDisk {
  /**
  * fsType is filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk TODO: how do we prevent errors in the filesystem from compromising the machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#fs_type DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * partition is the partition in the volume that you want to mount. If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as '1'. Similarly, the volume partition for /dev/sda is '0' (or you can leave the property empty). More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#partition DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#partition}
  */
  readonly partition?: number;
  /**
  * pdName is unique name of the PD resource in GCE. Used to identify the disk in GCE. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#pd_name DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#pd_name}
  */
  readonly pdName: string;
  /**
  * readOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#read_only DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
}

export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesGcePersistentDiskToTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesGcePersistentDisk | cdktf.IResolvable): any {
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


export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesGcePersistentDiskToHclTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesGcePersistentDisk | cdktf.IResolvable): any {
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

export class DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesGcePersistentDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesGcePersistentDisk | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesGcePersistentDisk | cdktf.IResolvable | undefined) {
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
export interface DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesGitRepo {
  /**
  * directory is the target directory name. Must not contain or start with '..'. If '.' is supplied, the volume directory will be the git repository. Otherwise, if specified, the volume will contain the git repository in the subdirectory with the given name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#directory DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#directory}
  */
  readonly directory?: string;
  /**
  * repository is the URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#repository DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#repository}
  */
  readonly repository: string;
  /**
  * revision is the commit hash for the specified revision.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#revision DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#revision}
  */
  readonly revision?: string;
}

export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesGitRepoToTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesGitRepo | cdktf.IResolvable): any {
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


export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesGitRepoToHclTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesGitRepo | cdktf.IResolvable): any {
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

export class DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesGitRepoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesGitRepo | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesGitRepo | cdktf.IResolvable | undefined) {
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
export interface DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesGlusterfs {
  /**
  * endpoints is the endpoint name that details Glusterfs topology. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#endpoints DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#endpoints}
  */
  readonly endpoints: string;
  /**
  * path is the Glusterfs volume path. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#path DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#path}
  */
  readonly path: string;
  /**
  * readOnly here will force the Glusterfs volume to be mounted with read-only permissions. Defaults to false. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#read_only DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
}

export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesGlusterfsToTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesGlusterfs | cdktf.IResolvable): any {
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


export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesGlusterfsToHclTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesGlusterfs | cdktf.IResolvable): any {
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

export class DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesGlusterfsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesGlusterfs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesGlusterfs | cdktf.IResolvable | undefined) {
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
export interface DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesHostPath {
  /**
  * path of the directory on the host. If the path is a symlink, it will follow the link to the real path. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#path DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#path}
  */
  readonly path: string;
  /**
  * type for HostPath Volume Defaults to '' More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#type DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesHostPathToTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesHostPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesHostPathToHclTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesHostPath | cdktf.IResolvable): any {
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

export class DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesHostPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesHostPath | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesHostPath | cdktf.IResolvable | undefined) {
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
export interface DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesIscsiSecretRef {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#name DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesIscsiSecretRefToTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesIscsiSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesIscsiSecretRefToHclTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesIscsiSecretRef | cdktf.IResolvable): any {
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

export class DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesIscsiSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesIscsiSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesIscsiSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesIscsi {
  /**
  * chapAuthDiscovery defines whether support iSCSI Discovery CHAP authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#chap_auth_discovery DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#chap_auth_discovery}
  */
  readonly chapAuthDiscovery?: boolean | cdktf.IResolvable;
  /**
  * chapAuthSession defines whether support iSCSI Session CHAP authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#chap_auth_session DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#chap_auth_session}
  */
  readonly chapAuthSession?: boolean | cdktf.IResolvable;
  /**
  * fsType is the filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#iscsi TODO: how do we prevent errors in the filesystem from compromising the machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#fs_type DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * initiatorName is the custom iSCSI Initiator Name. If initiatorName is specified with iscsiInterface simultaneously, new iSCSI interface <target portal>:<volume name> will be created for the connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#initiator_name DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#initiator_name}
  */
  readonly initiatorName?: string;
  /**
  * iqn is the target iSCSI Qualified Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#iqn DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#iqn}
  */
  readonly iqn: string;
  /**
  * iscsiInterface is the interface Name that uses an iSCSI transport. Defaults to 'default' (tcp).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#iscsi_interface DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#iscsi_interface}
  */
  readonly iscsiInterface?: string;
  /**
  * lun represents iSCSI Target Lun number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#lun DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#lun}
  */
  readonly lun: number;
  /**
  * portals is the iSCSI Target Portal List. The portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#portals DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#portals}
  */
  readonly portals?: string[];
  /**
  * readOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#read_only DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * secretRef is the CHAP Secret for iSCSI target and initiator authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#secret_ref DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesIscsiSecretRef;
  /**
  * targetPortal is iSCSI Target Portal. The Portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#target_portal DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#target_portal}
  */
  readonly targetPortal: string;
}

export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesIscsiToTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesIscsi | cdktf.IResolvable): any {
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
    secret_ref: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesIscsiSecretRefToTerraform(struct!.secretRef),
    target_portal: cdktf.stringToTerraform(struct!.targetPortal),
  }
}


export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesIscsiToHclTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesIscsi | cdktf.IResolvable): any {
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
      value: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesIscsiSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesIscsiSecretRef",
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

export class DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesIscsiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesIscsi | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesIscsi | cdktf.IResolvable | undefined) {
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
  private _secretRef = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesIscsiSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesIscsiSecretRef) {
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
export interface DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesNfs {
  /**
  * path that is exported by the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#path DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#path}
  */
  readonly path: string;
  /**
  * readOnly here will force the NFS export to be mounted with read-only permissions. Defaults to false. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#read_only DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * server is the hostname or IP address of the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#server DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#server}
  */
  readonly server: string;
}

export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesNfsToTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesNfs | cdktf.IResolvable): any {
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


export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesNfsToHclTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesNfs | cdktf.IResolvable): any {
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

export class DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesNfsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesNfs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesNfs | cdktf.IResolvable | undefined) {
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
export interface DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesPersistentVolumeClaim {
  /**
  * claimName is the name of a PersistentVolumeClaim in the same namespace as the pod using this volume. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#claim_name DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#claim_name}
  */
  readonly claimName: string;
  /**
  * readOnly Will force the ReadOnly setting in VolumeMounts. Default false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#read_only DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
}

export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesPersistentVolumeClaimToTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesPersistentVolumeClaim | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claim_name: cdktf.stringToTerraform(struct!.claimName),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
  }
}


export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesPersistentVolumeClaimToHclTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesPersistentVolumeClaim | cdktf.IResolvable): any {
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

export class DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesPersistentVolumeClaimOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesPersistentVolumeClaim | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesPersistentVolumeClaim | cdktf.IResolvable | undefined) {
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
export interface DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesPhotonPersistentDisk {
  /**
  * fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#fs_type DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * pdID is the ID that identifies Photon Controller persistent disk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#pd_id DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#pd_id}
  */
  readonly pdId: string;
}

export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesPhotonPersistentDiskToTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesPhotonPersistentDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    pd_id: cdktf.stringToTerraform(struct!.pdId),
  }
}


export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesPhotonPersistentDiskToHclTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesPhotonPersistentDisk | cdktf.IResolvable): any {
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

export class DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesPhotonPersistentDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesPhotonPersistentDisk | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesPhotonPersistentDisk | cdktf.IResolvable | undefined) {
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
export interface DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesPortworxVolume {
  /**
  * fSType represents the filesystem type to mount Must be a filesystem type supported by the host operating system. Ex. 'ext4', 'xfs'. Implicitly inferred to be 'ext4' if unspecified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#fs_type DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#read_only DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * volumeID uniquely identifies a Portworx volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#volume_id DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#volume_id}
  */
  readonly volumeId: string;
}

export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesPortworxVolumeToTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesPortworxVolume | cdktf.IResolvable): any {
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


export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesPortworxVolumeToHclTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesPortworxVolume | cdktf.IResolvable): any {
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

export class DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesPortworxVolumeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesPortworxVolume | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesPortworxVolume | cdktf.IResolvable | undefined) {
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
export interface DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesConfigMapItems {
  /**
  * key is the key to project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#key DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * mode is Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#mode DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#mode}
  */
  readonly mode?: number;
  /**
  * path is the relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#path DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesConfigMapItemsToTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesConfigMapItems | cdktf.IResolvable): any {
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


export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesConfigMapItemsToHclTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesConfigMapItems | cdktf.IResolvable): any {
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

export class DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesConfigMapItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesConfigMapItems | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesConfigMapItems | cdktf.IResolvable | undefined) {
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

export class DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesConfigMapItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesConfigMapItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesConfigMapItemsOutputReference {
    return new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesConfigMapItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesConfigMap {
  /**
  * items if unspecified, each key-value pair in the Data field of the referenced ConfigMap will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the ConfigMap, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#items DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#items}
  */
  readonly items?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesConfigMapItems[] | cdktf.IResolvable;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#name DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * optional specify whether the ConfigMap or its keys must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#optional DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesConfigMapToTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesConfigMapItemsToTerraform, false)(struct!.items),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesConfigMapToHclTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesConfigMapItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesConfigMapItemsList",
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

export class DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesConfigMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesConfigMap | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesConfigMap | cdktf.IResolvable | undefined) {
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
  private _items = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesConfigMapItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesConfigMapItems[] | cdktf.IResolvable) {
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
export interface DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesDownwardApiItemsFieldRef {
  /**
  * Version of the schema the FieldPath is written in terms of, defaults to 'v1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#api_version DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Path of the field to select in the specified API version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#field_path DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#field_path}
  */
  readonly fieldPath: string;
}

export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesDownwardApiItemsFieldRefToTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesDownwardApiItemsFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}


export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesDownwardApiItemsFieldRefToHclTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesDownwardApiItemsFieldRef | cdktf.IResolvable): any {
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

export class DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesDownwardApiItemsFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesDownwardApiItemsFieldRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesDownwardApiItemsFieldRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesDownwardApiItemsResourceFieldRef {
  /**
  * Container name: required for volumes, optional for env vars
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#container_name DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#container_name}
  */
  readonly containerName?: string;
  /**
  * Specifies the output format of the exposed resources, defaults to '1'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#divisor DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#divisor}
  */
  readonly divisor?: string;
  /**
  * Required: resource to select
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#resource DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#resource}
  */
  readonly resource: string;
}

export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesDownwardApiItemsResourceFieldRefToTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesDownwardApiItemsResourceFieldRef | cdktf.IResolvable): any {
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


export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesDownwardApiItemsResourceFieldRefToHclTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesDownwardApiItemsResourceFieldRef | cdktf.IResolvable): any {
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

export class DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesDownwardApiItemsResourceFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesDownwardApiItemsResourceFieldRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesDownwardApiItemsResourceFieldRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesDownwardApiItems {
  /**
  * Required: Selects a field of the pod: only annotations, labels, name and namespace are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#field_ref DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#field_ref}
  */
  readonly fieldRef?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesDownwardApiItemsFieldRef;
  /**
  * Optional: mode bits used to set permissions on this file, must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#mode DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#mode}
  */
  readonly mode?: number;
  /**
  * Required: Path is the relative path name of the file to be created. Must not be absolute or contain the '..' path. Must be utf-8 encoded. The first item of the relative path must not start with '..'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#path DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#path}
  */
  readonly path: string;
  /**
  * Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, requests.cpu and requests.memory) are currently supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#resource_field_ref DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#resource_field_ref}
  */
  readonly resourceFieldRef?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesDownwardApiItemsResourceFieldRef;
}

export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesDownwardApiItemsToTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesDownwardApiItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_ref: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesDownwardApiItemsFieldRefToTerraform(struct!.fieldRef),
    mode: cdktf.numberToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
    resource_field_ref: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesDownwardApiItemsResourceFieldRefToTerraform(struct!.resourceFieldRef),
  }
}


export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesDownwardApiItemsToHclTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesDownwardApiItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_ref: {
      value: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesDownwardApiItemsFieldRefToHclTerraform(struct!.fieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesDownwardApiItemsFieldRef",
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
      value: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesDownwardApiItemsResourceFieldRefToHclTerraform(struct!.resourceFieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesDownwardApiItemsResourceFieldRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesDownwardApiItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesDownwardApiItems | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesDownwardApiItems | cdktf.IResolvable | undefined) {
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
  private _fieldRef = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesDownwardApiItemsFieldRefOutputReference(this, "field_ref");
  public get fieldRef() {
    return this._fieldRef;
  }
  public putFieldRef(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesDownwardApiItemsFieldRef) {
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
  private _resourceFieldRef = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesDownwardApiItemsResourceFieldRefOutputReference(this, "resource_field_ref");
  public get resourceFieldRef() {
    return this._resourceFieldRef;
  }
  public putResourceFieldRef(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesDownwardApiItemsResourceFieldRef) {
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

export class DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesDownwardApiItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesDownwardApiItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesDownwardApiItemsOutputReference {
    return new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesDownwardApiItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesDownwardApi {
  /**
  * Items is a list of DownwardAPIVolume file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#items DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#items}
  */
  readonly items?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesDownwardApiItems[] | cdktf.IResolvable;
}

export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesDownwardApiToTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesDownwardApi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesDownwardApiItemsToTerraform, false)(struct!.items),
  }
}


export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesDownwardApiToHclTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesDownwardApi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesDownwardApiItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesDownwardApiItemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesDownwardApiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesDownwardApi | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesDownwardApi | cdktf.IResolvable | undefined) {
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
  private _items = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesDownwardApiItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesDownwardApiItems[] | cdktf.IResolvable) {
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
export interface DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesSecretItems {
  /**
  * key is the key to project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#key DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * mode is Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#mode DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#mode}
  */
  readonly mode?: number;
  /**
  * path is the relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#path DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesSecretItemsToTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesSecretItems | cdktf.IResolvable): any {
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


export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesSecretItemsToHclTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesSecretItems | cdktf.IResolvable): any {
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

export class DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesSecretItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesSecretItems | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesSecretItems | cdktf.IResolvable | undefined) {
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

export class DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesSecretItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesSecretItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesSecretItemsOutputReference {
    return new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesSecretItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesSecret {
  /**
  * items if unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#items DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#items}
  */
  readonly items?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesSecretItems[] | cdktf.IResolvable;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#name DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * optional field specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#optional DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesSecretToTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesSecretItemsToTerraform, false)(struct!.items),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesSecretToHclTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesSecretItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesSecretItemsList",
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

export class DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesSecret | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesSecret | cdktf.IResolvable | undefined) {
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
  private _items = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesSecretItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesSecretItems[] | cdktf.IResolvable) {
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
export interface DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesServiceAccountToken {
  /**
  * audience is the intended audience of the token. A recipient of a token must identify itself with an identifier specified in the audience of the token, and otherwise should reject the token. The audience defaults to the identifier of the apiserver.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#audience DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#audience}
  */
  readonly audience?: string;
  /**
  * expirationSeconds is the requested duration of validity of the service account token. As the token approaches expiration, the kubelet volume plugin will proactively rotate the service account token. The kubelet will start trying to rotate the token if the token is older than 80 percent of its time to live or if the token is older than 24 hours.Defaults to 1 hour and must be at least 10 minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#expiration_seconds DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#expiration_seconds}
  */
  readonly expirationSeconds?: number;
  /**
  * path is the path relative to the mount point of the file to project the token into.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#path DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesServiceAccountTokenToTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesServiceAccountToken | cdktf.IResolvable): any {
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


export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesServiceAccountTokenToHclTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesServiceAccountToken | cdktf.IResolvable): any {
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

export class DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesServiceAccountTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesServiceAccountToken | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesServiceAccountToken | cdktf.IResolvable | undefined) {
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
export interface DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSources {
  /**
  * configMap information about the configMap data to project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#config_map DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#config_map}
  */
  readonly configMap?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesConfigMap;
  /**
  * downwardAPI information about the downwardAPI data to project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#downward_api DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#downward_api}
  */
  readonly downwardApi?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesDownwardApi;
  /**
  * secret information about the secret data to project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#secret DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#secret}
  */
  readonly secret?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesSecret;
  /**
  * serviceAccountToken is information about the serviceAccountToken data to project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#service_account_token DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#service_account_token}
  */
  readonly serviceAccountToken?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesServiceAccountToken;
}

export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesToTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesConfigMapToTerraform(struct!.configMap),
    downward_api: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesDownwardApiToTerraform(struct!.downwardApi),
    secret: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesSecretToTerraform(struct!.secret),
    service_account_token: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesServiceAccountTokenToTerraform(struct!.serviceAccountToken),
  }
}


export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesToHclTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map: {
      value: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesConfigMapToHclTerraform(struct!.configMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesConfigMap",
    },
    downward_api: {
      value: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesDownwardApiToHclTerraform(struct!.downwardApi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesDownwardApi",
    },
    secret: {
      value: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesSecret",
    },
    service_account_token: {
      value: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesServiceAccountTokenToHclTerraform(struct!.serviceAccountToken),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesServiceAccountToken",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSources | cdktf.IResolvable | undefined) {
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
  private _configMap = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesConfigMapOutputReference(this, "config_map");
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesConfigMap) {
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
  private _downwardApi = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesDownwardApiOutputReference(this, "downward_api");
  public get downwardApi() {
    return this._downwardApi;
  }
  public putDownwardApi(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesDownwardApi) {
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
  private _secret = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesSecret) {
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
  private _serviceAccountToken = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesServiceAccountTokenOutputReference(this, "service_account_token");
  public get serviceAccountToken() {
    return this._serviceAccountToken;
  }
  public putServiceAccountToken(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesServiceAccountToken) {
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

export class DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesList extends cdktf.ComplexList {
  public internalValue? : DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSources[] | cdktf.IResolvable

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
  public get(index: number): DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesOutputReference {
    return new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjected {
  /**
  * defaultMode are the mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#default_mode DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#default_mode}
  */
  readonly defaultMode?: number;
  /**
  * sources is the list of volume projections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#sources DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#sources}
  */
  readonly sources?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSources[] | cdktf.IResolvable;
}

export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedToTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjected | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_mode: cdktf.numberToTerraform(struct!.defaultMode),
    sources: cdktf.listMapper(dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesToTerraform, false)(struct!.sources),
  }
}


export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedToHclTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjected | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesToHclTerraform, false)(struct!.sources),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjected | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjected | cdktf.IResolvable | undefined) {
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
  private _sources = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSourcesList(this, "sources", false);
  public get sources() {
    return this._sources;
  }
  public putSources(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedSources[] | cdktf.IResolvable) {
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
export interface DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesQuobyte {
  /**
  * group to map volume access to Default is no group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#group DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#group}
  */
  readonly group?: string;
  /**
  * readOnly here will force the Quobyte volume to be mounted with read-only permissions. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#read_only DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * registry represents a single or multiple Quobyte Registry services specified as a string as host:port pair (multiple entries are separated with commas) which acts as the central registry for volumes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#registry DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#registry}
  */
  readonly registry: string;
  /**
  * tenant owning the given Quobyte volume in the Backend Used with dynamically provisioned Quobyte volumes, value is set by the plugin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#tenant DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#tenant}
  */
  readonly tenant?: string;
  /**
  * user to map volume access to Defaults to serivceaccount user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#user DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#user}
  */
  readonly user?: string;
  /**
  * volume is a string that references an already created Quobyte volume by name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#volume DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#volume}
  */
  readonly volume: string;
}

export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesQuobyteToTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesQuobyte | cdktf.IResolvable): any {
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


export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesQuobyteToHclTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesQuobyte | cdktf.IResolvable): any {
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

export class DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesQuobyteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesQuobyte | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesQuobyte | cdktf.IResolvable | undefined) {
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
export interface DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesRbdSecretRef {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#name DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesRbdSecretRefToTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesRbdSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesRbdSecretRefToHclTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesRbdSecretRef | cdktf.IResolvable): any {
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

export class DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesRbdSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesRbdSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesRbdSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesRbd {
  /**
  * fsType is the filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#rbd TODO: how do we prevent errors in the filesystem from compromising the machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#fs_type DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * image is the rados image name. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#image DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#image}
  */
  readonly image: string;
  /**
  * keyring is the path to key ring for RBDUser. Default is /etc/ceph/keyring. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#keyring DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#keyring}
  */
  readonly keyring?: string;
  /**
  * monitors is a collection of Ceph monitors. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#monitors DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#monitors}
  */
  readonly monitors: string[];
  /**
  * pool is the rados pool name. Default is rbd. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#pool DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#pool}
  */
  readonly pool?: string;
  /**
  * readOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#read_only DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * secretRef is name of the authentication secret for RBDUser. If provided overrides keyring. Default is nil. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#secret_ref DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesRbdSecretRef;
  /**
  * user is the rados user name. Default is admin. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#user DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#user}
  */
  readonly user?: string;
}

export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesRbdToTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesRbd | cdktf.IResolvable): any {
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
    secret_ref: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesRbdSecretRefToTerraform(struct!.secretRef),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesRbdToHclTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesRbd | cdktf.IResolvable): any {
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
      value: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesRbdSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesRbdSecretRef",
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

export class DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesRbdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesRbd | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesRbd | cdktf.IResolvable | undefined) {
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
  private _secretRef = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesRbdSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesRbdSecretRef) {
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
export interface DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesScaleIoSecretRef {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#name DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesScaleIoSecretRefToTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesScaleIoSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesScaleIoSecretRefToHclTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesScaleIoSecretRef | cdktf.IResolvable): any {
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

export class DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesScaleIoSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesScaleIoSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesScaleIoSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesScaleIo {
  /**
  * fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. 'ext4', 'xfs', 'ntfs'. Default is 'xfs'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#fs_type DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * gateway is the host address of the ScaleIO API Gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#gateway DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#gateway}
  */
  readonly gateway: string;
  /**
  * protectionDomain is the name of the ScaleIO Protection Domain for the configured storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#protection_domain DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#protection_domain}
  */
  readonly protectionDomain?: string;
  /**
  * readOnly Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#read_only DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * secretRef references to the secret for ScaleIO user and other sensitive information. If this is not provided, Login operation will fail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#secret_ref DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#secret_ref}
  */
  readonly secretRef: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesScaleIoSecretRef;
  /**
  * sslEnabled Flag enable/disable SSL communication with Gateway, default false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#ssl_enabled DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#ssl_enabled}
  */
  readonly sslEnabled?: boolean | cdktf.IResolvable;
  /**
  * storageMode indicates whether the storage for a volume should be ThickProvisioned or ThinProvisioned. Default is ThinProvisioned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#storage_mode DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#storage_mode}
  */
  readonly storageMode?: string;
  /**
  * storagePool is the ScaleIO Storage Pool associated with the protection domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#storage_pool DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#storage_pool}
  */
  readonly storagePool?: string;
  /**
  * system is the name of the storage system as configured in ScaleIO.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#system DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#system}
  */
  readonly systemAttribute: string;
  /**
  * volumeName is the name of a volume already created in the ScaleIO system that is associated with this volume source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#volume_name DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#volume_name}
  */
  readonly volumeName?: string;
}

export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesScaleIoToTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesScaleIo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    gateway: cdktf.stringToTerraform(struct!.gateway),
    protection_domain: cdktf.stringToTerraform(struct!.protectionDomain),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_ref: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesScaleIoSecretRefToTerraform(struct!.secretRef),
    ssl_enabled: cdktf.booleanToTerraform(struct!.sslEnabled),
    storage_mode: cdktf.stringToTerraform(struct!.storageMode),
    storage_pool: cdktf.stringToTerraform(struct!.storagePool),
    system: cdktf.stringToTerraform(struct!.systemAttribute),
    volume_name: cdktf.stringToTerraform(struct!.volumeName),
  }
}


export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesScaleIoToHclTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesScaleIo | cdktf.IResolvable): any {
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
      value: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesScaleIoSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesScaleIoSecretRef",
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

export class DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesScaleIoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesScaleIo | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesScaleIo | cdktf.IResolvable | undefined) {
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
  private _secretRef = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesScaleIoSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesScaleIoSecretRef) {
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
export interface DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesSecretItems {
  /**
  * key is the key to project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#key DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * mode is Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#mode DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#mode}
  */
  readonly mode?: number;
  /**
  * path is the relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#path DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesSecretItemsToTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesSecretItems | cdktf.IResolvable): any {
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


export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesSecretItemsToHclTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesSecretItems | cdktf.IResolvable): any {
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

export class DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesSecretItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesSecretItems | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesSecretItems | cdktf.IResolvable | undefined) {
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

export class DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesSecretItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesSecretItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesSecretItemsOutputReference {
    return new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesSecretItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesSecret {
  /**
  * defaultMode is Optional: mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#default_mode DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#default_mode}
  */
  readonly defaultMode?: number;
  /**
  * items If unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#items DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#items}
  */
  readonly items?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesSecretItems[] | cdktf.IResolvable;
  /**
  * optional field specify whether the Secret or its keys must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#optional DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * secretName is the name of the secret in the pod's namespace to use. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#secret_name DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#secret_name}
  */
  readonly secretName?: string;
}

export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesSecretToTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_mode: cdktf.numberToTerraform(struct!.defaultMode),
    items: cdktf.listMapper(dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesSecretItemsToTerraform, false)(struct!.items),
    optional: cdktf.booleanToTerraform(struct!.optional),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesSecretToHclTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesSecret | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesSecretItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesSecretItemsList",
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

export class DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesSecret | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesSecret | cdktf.IResolvable | undefined) {
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
  private _items = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesSecretItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesSecretItems[] | cdktf.IResolvable) {
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
export interface DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesStorageosSecretRef {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#name DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesStorageosSecretRefToTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesStorageosSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesStorageosSecretRefToHclTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesStorageosSecretRef | cdktf.IResolvable): any {
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

export class DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesStorageosSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesStorageosSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesStorageosSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesStorageos {
  /**
  * fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#fs_type DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#read_only DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * secretRef specifies the secret to use for obtaining the StorageOS API credentials. If not specified, default values will be attempted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#secret_ref DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesStorageosSecretRef;
  /**
  * volumeName is the human-readable name of the StorageOS volume. Volume names are only unique within a namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#volume_name DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#volume_name}
  */
  readonly volumeName?: string;
  /**
  * volumeNamespace specifies the scope of the volume within StorageOS. If no namespace is specified then the Pod's namespace will be used. This allows the Kubernetes name scoping to be mirrored within StorageOS for tighter integration. Set VolumeName to any name to override the default behaviour. Set to 'default' if you are not using namespaces within StorageOS. Namespaces that do not pre-exist within StorageOS will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#volume_namespace DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#volume_namespace}
  */
  readonly volumeNamespace?: string;
}

export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesStorageosToTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesStorageos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_ref: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesStorageosSecretRefToTerraform(struct!.secretRef),
    volume_name: cdktf.stringToTerraform(struct!.volumeName),
    volume_namespace: cdktf.stringToTerraform(struct!.volumeNamespace),
  }
}


export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesStorageosToHclTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesStorageos | cdktf.IResolvable): any {
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
      value: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesStorageosSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesStorageosSecretRef",
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

export class DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesStorageosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesStorageos | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesStorageos | cdktf.IResolvable | undefined) {
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
  private _secretRef = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesStorageosSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesStorageosSecretRef) {
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
export interface DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesVsphereVolume {
  /**
  * fsType is filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#fs_type DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * storagePolicyID is the storage Policy Based Management (SPBM) profile ID associated with the StoragePolicyName.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#storage_policy_id DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#storage_policy_id}
  */
  readonly storagePolicyId?: string;
  /**
  * storagePolicyName is the storage Policy Based Management (SPBM) profile name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#storage_policy_name DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#storage_policy_name}
  */
  readonly storagePolicyName?: string;
  /**
  * volumePath is the path that identifies vSphere volume vmdk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#volume_path DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#volume_path}
  */
  readonly volumePath: string;
}

export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesVsphereVolumeToTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesVsphereVolume | cdktf.IResolvable): any {
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


export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesVsphereVolumeToHclTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesVsphereVolume | cdktf.IResolvable): any {
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

export class DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesVsphereVolumeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesVsphereVolume | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesVsphereVolume | cdktf.IResolvable | undefined) {
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
export interface DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumes {
  /**
  * awsElasticBlockStore represents an AWS Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#aws_elastic_block_store DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#aws_elastic_block_store}
  */
  readonly awsElasticBlockStore?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesAwsElasticBlockStore;
  /**
  * azureDisk represents an Azure Data Disk mount on the host and bind mount to the pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#azure_disk DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#azure_disk}
  */
  readonly azureDisk?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesAzureDisk;
  /**
  * azureFile represents an Azure File Service mount on the host and bind mount to the pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#azure_file DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#azure_file}
  */
  readonly azureFile?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesAzureFile;
  /**
  * cephFS represents a Ceph FS mount on the host that shares a pod's lifetime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#cephfs DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#cephfs}
  */
  readonly cephfs?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesCephfs;
  /**
  * cinder represents a cinder volume attached and mounted on kubelets host machine. More info: https://examples.k8s.io/mysql-cinder-pd/README.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#cinder DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#cinder}
  */
  readonly cinder?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesCinder;
  /**
  * configMap represents a configMap that should populate this volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#config_map DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#config_map}
  */
  readonly configMap?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesConfigMap;
  /**
  * csi (Container Storage Interface) represents ephemeral storage that is handled by certain external CSI drivers (Beta feature).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#csi DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#csi}
  */
  readonly csi?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesCsi;
  /**
  * downwardAPI represents downward API about the pod that should populate this volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#downward_api DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#downward_api}
  */
  readonly downwardApi?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesDownwardApi;
  /**
  * emptyDir represents a temporary directory that shares a pod's lifetime. More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#empty_dir DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#empty_dir}
  */
  readonly emptyDir?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEmptyDir;
  /**
  * ephemeral represents a volume that is handled by a cluster storage driver. The volume's lifecycle is tied to the pod that defines it - it will be created before the pod starts, and deleted when the pod is removed. Use this if: a) the volume is only needed while the pod runs, b) features of normal volumes like restoring from snapshot or capacity tracking are needed, c) the storage driver is specified through a storage class, and d) the storage driver supports dynamic volume provisioning through a PersistentVolumeClaim (see EphemeralVolumeSource for more information on the connection between this volume type and PersistentVolumeClaim). Use PersistentVolumeClaim or one of the vendor-specific APIs for volumes that persist for longer than the lifecycle of an individual pod. Use CSI for light-weight local ephemeral volumes if the CSI driver is meant to be used that way - see the documentation of the driver for more information. A pod can use both types of ephemeral volumes and persistent volumes at the same time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#ephemeral DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#ephemeral}
  */
  readonly ephemeral?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeral;
  /**
  * fc represents a Fibre Channel resource that is attached to a kubelet's host machine and then exposed to the pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#fc DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#fc}
  */
  readonly fc?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesFc;
  /**
  * flexVolume represents a generic volume resource that is provisioned/attached using an exec based plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#flex_volume DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#flex_volume}
  */
  readonly flexVolume?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesFlexVolume;
  /**
  * flocker represents a Flocker volume attached to a kubelet's host machine. This depends on the Flocker control service being running
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#flocker DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#flocker}
  */
  readonly flocker?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesFlocker;
  /**
  * gcePersistentDisk represents a GCE Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#gce_persistent_disk DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#gce_persistent_disk}
  */
  readonly gcePersistentDisk?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesGcePersistentDisk;
  /**
  * gitRepo represents a git repository at a particular revision. DEPRECATED: GitRepo is deprecated. To provision a container with a git repo, mount an EmptyDir into an InitContainer that clones the repo using git, then mount the EmptyDir into the Pod's container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#git_repo DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#git_repo}
  */
  readonly gitRepo?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesGitRepo;
  /**
  * glusterfs represents a Glusterfs mount on the host that shares a pod's lifetime. More info: https://examples.k8s.io/volumes/glusterfs/README.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#glusterfs DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#glusterfs}
  */
  readonly glusterfs?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesGlusterfs;
  /**
  * hostPath represents a pre-existing file or directory on the host machine that is directly exposed to the container. This is generally used for system agents or other privileged things that are allowed to see the host machine. Most containers will NOT need this. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath --- TODO(jonesdl) We need to restrict who can use host directory mounts and who can/can not mount host directories as read/write.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#host_path DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#host_path}
  */
  readonly hostPath?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesHostPath;
  /**
  * iscsi represents an ISCSI Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://examples.k8s.io/volumes/iscsi/README.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#iscsi DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#iscsi}
  */
  readonly iscsi?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesIscsi;
  /**
  * name of the volume. Must be a DNS_LABEL and unique within the pod. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#name DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * nfs represents an NFS mount on the host that shares a pod's lifetime More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#nfs DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#nfs}
  */
  readonly nfs?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesNfs;
  /**
  * persistentVolumeClaimVolumeSource represents a reference to a PersistentVolumeClaim in the same namespace. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#persistent_volume_claim DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#persistent_volume_claim}
  */
  readonly persistentVolumeClaim?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesPersistentVolumeClaim;
  /**
  * photonPersistentDisk represents a PhotonController persistent disk attached and mounted on kubelets host machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#photon_persistent_disk DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#photon_persistent_disk}
  */
  readonly photonPersistentDisk?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesPhotonPersistentDisk;
  /**
  * portworxVolume represents a portworx volume attached and mounted on kubelets host machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#portworx_volume DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#portworx_volume}
  */
  readonly portworxVolume?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesPortworxVolume;
  /**
  * projected items for all in one resources secrets, configmaps, and downward API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#projected DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#projected}
  */
  readonly projected?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjected;
  /**
  * quobyte represents a Quobyte mount on the host that shares a pod's lifetime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#quobyte DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#quobyte}
  */
  readonly quobyte?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesQuobyte;
  /**
  * rbd represents a Rados Block Device mount on the host that shares a pod's lifetime. More info: https://examples.k8s.io/volumes/rbd/README.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#rbd DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#rbd}
  */
  readonly rbd?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesRbd;
  /**
  * scaleIO represents a ScaleIO persistent volume attached and mounted on Kubernetes nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#scale_io DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#scale_io}
  */
  readonly scaleIo?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesScaleIo;
  /**
  * secret represents a secret that should populate this volume. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#secret DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#secret}
  */
  readonly secret?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesSecret;
  /**
  * storageOS represents a StorageOS volume attached and mounted on Kubernetes nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#storageos DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#storageos}
  */
  readonly storageos?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesStorageos;
  /**
  * vsphereVolume represents a vSphere volume attached and mounted on kubelets host machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#vsphere_volume DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#vsphere_volume}
  */
  readonly vsphereVolume?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesVsphereVolume;
}

export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesToTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_elastic_block_store: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesAwsElasticBlockStoreToTerraform(struct!.awsElasticBlockStore),
    azure_disk: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesAzureDiskToTerraform(struct!.azureDisk),
    azure_file: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesAzureFileToTerraform(struct!.azureFile),
    cephfs: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesCephfsToTerraform(struct!.cephfs),
    cinder: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesCinderToTerraform(struct!.cinder),
    config_map: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesConfigMapToTerraform(struct!.configMap),
    csi: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesCsiToTerraform(struct!.csi),
    downward_api: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesDownwardApiToTerraform(struct!.downwardApi),
    empty_dir: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEmptyDirToTerraform(struct!.emptyDir),
    ephemeral: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralToTerraform(struct!.ephemeral),
    fc: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesFcToTerraform(struct!.fc),
    flex_volume: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesFlexVolumeToTerraform(struct!.flexVolume),
    flocker: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesFlockerToTerraform(struct!.flocker),
    gce_persistent_disk: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesGcePersistentDiskToTerraform(struct!.gcePersistentDisk),
    git_repo: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesGitRepoToTerraform(struct!.gitRepo),
    glusterfs: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesGlusterfsToTerraform(struct!.glusterfs),
    host_path: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesHostPathToTerraform(struct!.hostPath),
    iscsi: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesIscsiToTerraform(struct!.iscsi),
    name: cdktf.stringToTerraform(struct!.name),
    nfs: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesNfsToTerraform(struct!.nfs),
    persistent_volume_claim: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesPersistentVolumeClaimToTerraform(struct!.persistentVolumeClaim),
    photon_persistent_disk: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesPhotonPersistentDiskToTerraform(struct!.photonPersistentDisk),
    portworx_volume: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesPortworxVolumeToTerraform(struct!.portworxVolume),
    projected: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedToTerraform(struct!.projected),
    quobyte: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesQuobyteToTerraform(struct!.quobyte),
    rbd: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesRbdToTerraform(struct!.rbd),
    scale_io: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesScaleIoToTerraform(struct!.scaleIo),
    secret: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesSecretToTerraform(struct!.secret),
    storageos: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesStorageosToTerraform(struct!.storageos),
    vsphere_volume: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesVsphereVolumeToTerraform(struct!.vsphereVolume),
  }
}


export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesToHclTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_elastic_block_store: {
      value: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesAwsElasticBlockStoreToHclTerraform(struct!.awsElasticBlockStore),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesAwsElasticBlockStore",
    },
    azure_disk: {
      value: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesAzureDiskToHclTerraform(struct!.azureDisk),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesAzureDisk",
    },
    azure_file: {
      value: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesAzureFileToHclTerraform(struct!.azureFile),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesAzureFile",
    },
    cephfs: {
      value: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesCephfsToHclTerraform(struct!.cephfs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesCephfs",
    },
    cinder: {
      value: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesCinderToHclTerraform(struct!.cinder),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesCinder",
    },
    config_map: {
      value: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesConfigMapToHclTerraform(struct!.configMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesConfigMap",
    },
    csi: {
      value: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesCsiToHclTerraform(struct!.csi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesCsi",
    },
    downward_api: {
      value: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesDownwardApiToHclTerraform(struct!.downwardApi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesDownwardApi",
    },
    empty_dir: {
      value: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEmptyDirToHclTerraform(struct!.emptyDir),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEmptyDir",
    },
    ephemeral: {
      value: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralToHclTerraform(struct!.ephemeral),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeral",
    },
    fc: {
      value: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesFcToHclTerraform(struct!.fc),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesFc",
    },
    flex_volume: {
      value: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesFlexVolumeToHclTerraform(struct!.flexVolume),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesFlexVolume",
    },
    flocker: {
      value: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesFlockerToHclTerraform(struct!.flocker),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesFlocker",
    },
    gce_persistent_disk: {
      value: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesGcePersistentDiskToHclTerraform(struct!.gcePersistentDisk),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesGcePersistentDisk",
    },
    git_repo: {
      value: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesGitRepoToHclTerraform(struct!.gitRepo),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesGitRepo",
    },
    glusterfs: {
      value: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesGlusterfsToHclTerraform(struct!.glusterfs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesGlusterfs",
    },
    host_path: {
      value: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesHostPathToHclTerraform(struct!.hostPath),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesHostPath",
    },
    iscsi: {
      value: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesIscsiToHclTerraform(struct!.iscsi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesIscsi",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nfs: {
      value: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesNfsToHclTerraform(struct!.nfs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesNfs",
    },
    persistent_volume_claim: {
      value: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesPersistentVolumeClaimToHclTerraform(struct!.persistentVolumeClaim),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesPersistentVolumeClaim",
    },
    photon_persistent_disk: {
      value: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesPhotonPersistentDiskToHclTerraform(struct!.photonPersistentDisk),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesPhotonPersistentDisk",
    },
    portworx_volume: {
      value: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesPortworxVolumeToHclTerraform(struct!.portworxVolume),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesPortworxVolume",
    },
    projected: {
      value: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedToHclTerraform(struct!.projected),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjected",
    },
    quobyte: {
      value: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesQuobyteToHclTerraform(struct!.quobyte),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesQuobyte",
    },
    rbd: {
      value: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesRbdToHclTerraform(struct!.rbd),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesRbd",
    },
    scale_io: {
      value: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesScaleIoToHclTerraform(struct!.scaleIo),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesScaleIo",
    },
    secret: {
      value: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesSecret",
    },
    storageos: {
      value: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesStorageosToHclTerraform(struct!.storageos),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesStorageos",
    },
    vsphere_volume: {
      value: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesVsphereVolumeToHclTerraform(struct!.vsphereVolume),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesVsphereVolume",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumes | cdktf.IResolvable | undefined) {
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
  private _awsElasticBlockStore = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesAwsElasticBlockStoreOutputReference(this, "aws_elastic_block_store");
  public get awsElasticBlockStore() {
    return this._awsElasticBlockStore;
  }
  public putAwsElasticBlockStore(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesAwsElasticBlockStore) {
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
  private _azureDisk = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesAzureDiskOutputReference(this, "azure_disk");
  public get azureDisk() {
    return this._azureDisk;
  }
  public putAzureDisk(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesAzureDisk) {
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
  private _azureFile = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesAzureFileOutputReference(this, "azure_file");
  public get azureFile() {
    return this._azureFile;
  }
  public putAzureFile(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesAzureFile) {
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
  private _cephfs = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesCephfsOutputReference(this, "cephfs");
  public get cephfs() {
    return this._cephfs;
  }
  public putCephfs(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesCephfs) {
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
  private _cinder = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesCinderOutputReference(this, "cinder");
  public get cinder() {
    return this._cinder;
  }
  public putCinder(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesCinder) {
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
  private _configMap = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesConfigMapOutputReference(this, "config_map");
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesConfigMap) {
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
  private _csi = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesCsiOutputReference(this, "csi");
  public get csi() {
    return this._csi;
  }
  public putCsi(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesCsi) {
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
  private _downwardApi = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesDownwardApiOutputReference(this, "downward_api");
  public get downwardApi() {
    return this._downwardApi;
  }
  public putDownwardApi(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesDownwardApi) {
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
  private _emptyDir = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEmptyDirOutputReference(this, "empty_dir");
  public get emptyDir() {
    return this._emptyDir;
  }
  public putEmptyDir(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEmptyDir) {
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
  private _ephemeral = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeralOutputReference(this, "ephemeral");
  public get ephemeral() {
    return this._ephemeral;
  }
  public putEphemeral(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesEphemeral) {
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
  private _fc = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesFcOutputReference(this, "fc");
  public get fc() {
    return this._fc;
  }
  public putFc(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesFc) {
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
  private _flexVolume = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesFlexVolumeOutputReference(this, "flex_volume");
  public get flexVolume() {
    return this._flexVolume;
  }
  public putFlexVolume(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesFlexVolume) {
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
  private _flocker = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesFlockerOutputReference(this, "flocker");
  public get flocker() {
    return this._flocker;
  }
  public putFlocker(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesFlocker) {
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
  private _gcePersistentDisk = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesGcePersistentDiskOutputReference(this, "gce_persistent_disk");
  public get gcePersistentDisk() {
    return this._gcePersistentDisk;
  }
  public putGcePersistentDisk(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesGcePersistentDisk) {
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
  private _gitRepo = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesGitRepoOutputReference(this, "git_repo");
  public get gitRepo() {
    return this._gitRepo;
  }
  public putGitRepo(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesGitRepo) {
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
  private _glusterfs = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesGlusterfsOutputReference(this, "glusterfs");
  public get glusterfs() {
    return this._glusterfs;
  }
  public putGlusterfs(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesGlusterfs) {
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
  private _hostPath = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesHostPathOutputReference(this, "host_path");
  public get hostPath() {
    return this._hostPath;
  }
  public putHostPath(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesHostPath) {
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
  private _iscsi = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesIscsiOutputReference(this, "iscsi");
  public get iscsi() {
    return this._iscsi;
  }
  public putIscsi(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesIscsi) {
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
  private _nfs = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesNfsOutputReference(this, "nfs");
  public get nfs() {
    return this._nfs;
  }
  public putNfs(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesNfs) {
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
  private _persistentVolumeClaim = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesPersistentVolumeClaimOutputReference(this, "persistent_volume_claim");
  public get persistentVolumeClaim() {
    return this._persistentVolumeClaim;
  }
  public putPersistentVolumeClaim(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesPersistentVolumeClaim) {
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
  private _photonPersistentDisk = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesPhotonPersistentDiskOutputReference(this, "photon_persistent_disk");
  public get photonPersistentDisk() {
    return this._photonPersistentDisk;
  }
  public putPhotonPersistentDisk(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesPhotonPersistentDisk) {
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
  private _portworxVolume = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesPortworxVolumeOutputReference(this, "portworx_volume");
  public get portworxVolume() {
    return this._portworxVolume;
  }
  public putPortworxVolume(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesPortworxVolume) {
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
  private _projected = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjectedOutputReference(this, "projected");
  public get projected() {
    return this._projected;
  }
  public putProjected(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesProjected) {
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
  private _quobyte = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesQuobyteOutputReference(this, "quobyte");
  public get quobyte() {
    return this._quobyte;
  }
  public putQuobyte(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesQuobyte) {
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
  private _rbd = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesRbdOutputReference(this, "rbd");
  public get rbd() {
    return this._rbd;
  }
  public putRbd(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesRbd) {
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
  private _scaleIo = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesScaleIoOutputReference(this, "scale_io");
  public get scaleIo() {
    return this._scaleIo;
  }
  public putScaleIo(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesScaleIo) {
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
  private _secret = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesSecret) {
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
  private _storageos = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesStorageosOutputReference(this, "storageos");
  public get storageos() {
    return this._storageos;
  }
  public putStorageos(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesStorageos) {
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
  private _vsphereVolume = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesVsphereVolumeOutputReference(this, "vsphere_volume");
  public get vsphereVolume() {
    return this._vsphereVolume;
  }
  public putVsphereVolume(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesVsphereVolume) {
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

export class DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesList extends cdktf.ComplexList {
  public internalValue? : DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumes[] | cdktf.IResolvable

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
  public get(index: number): DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesOutputReference {
    return new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTask {
  /**
  * Container is the main container image to run in the pod
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#container DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#container}
  */
  readonly container?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainer;
  /**
  * Volumes is a list of volumes that can be mounted by containers in a template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#volumes DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#volumes}
  */
  readonly volumes?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumes[] | cdktf.IResolvable;
}

export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskToTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTask | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerToTerraform(struct!.container),
    volumes: cdktf.listMapper(dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesToTerraform, false)(struct!.volumes),
  }
}


export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskToHclTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTask | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container: {
      value: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerToHclTerraform(struct!.container),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainer",
    },
    volumes: {
      value: cdktf.listMapperHcl(dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesToHclTerraform, false)(struct!.volumes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTask | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._container?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container?.internalValue;
    }
    if (this._volumes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumes = this._volumes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTask | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._container.internalValue = undefined;
      this._volumes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._container.internalValue = value.container;
      this._volumes.internalValue = value.volumes;
    }
  }

  // container - computed: false, optional: true, required: false
  private _container = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainerOutputReference(this, "container");
  public get container() {
    return this._container;
  }
  public putContainer(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskContainer) {
    this._container.internalValue = value;
  }
  public resetContainer() {
    this._container.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container.internalValue;
  }

  // volumes - computed: false, optional: true, required: false
  private _volumes = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumesList(this, "volumes", false);
  public get volumes() {
    return this._volumes;
  }
  public putVolumes(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskVolumes[] | cdktf.IResolvable) {
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
export interface DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTimeChaosSelectorExpressionSelectors {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#key DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#operator DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#values DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTimeChaosSelectorExpressionSelectorsToTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTimeChaosSelectorExpressionSelectors | cdktf.IResolvable): any {
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


export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTimeChaosSelectorExpressionSelectorsToHclTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTimeChaosSelectorExpressionSelectors | cdktf.IResolvable): any {
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

export class DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTimeChaosSelectorExpressionSelectorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTimeChaosSelectorExpressionSelectors | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTimeChaosSelectorExpressionSelectors | cdktf.IResolvable | undefined) {
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

export class DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTimeChaosSelectorExpressionSelectorsList extends cdktf.ComplexList {
  public internalValue? : DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTimeChaosSelectorExpressionSelectors[] | cdktf.IResolvable

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
  public get(index: number): DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTimeChaosSelectorExpressionSelectorsOutputReference {
    return new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTimeChaosSelectorExpressionSelectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTimeChaosSelector {
  /**
  * Map of string keys and values that can be used to select objects. A selector based on annotations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#annotation_selectors DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#annotation_selectors}
  */
  readonly annotationSelectors?: { [key: string]: string };
  /**
  * a slice of label selector expressions that can be used to select objects. A list of selectors based on set-based label expressions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#expression_selectors DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#expression_selectors}
  */
  readonly expressionSelectors?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTimeChaosSelectorExpressionSelectors[] | cdktf.IResolvable;
  /**
  * Map of string keys and values that can be used to select objects. A selector based on fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#field_selectors DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#field_selectors}
  */
  readonly fieldSelectors?: { [key: string]: string };
  /**
  * Map of string keys and values that can be used to select objects. A selector based on labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#label_selectors DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#label_selectors}
  */
  readonly labelSelectors?: { [key: string]: string };
  /**
  * Namespaces is a set of namespace to which objects belong.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#namespaces DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * Map of string keys and values that can be used to select nodes. Selector which must match a node's labels, and objects must belong to these selected nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#node_selectors DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#node_selectors}
  */
  readonly nodeSelectors?: { [key: string]: string };
  /**
  * Nodes is a set of node name and objects must belong to these nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#nodes DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#nodes}
  */
  readonly nodes?: string[];
  /**
  * PodPhaseSelectors is a set of condition of a pod at the current time. supported value: Pending / Running / Succeeded / Failed / Unknown
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#pod_phase_selectors DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#pod_phase_selectors}
  */
  readonly podPhaseSelectors?: string[];
  /**
  * Pods is a map of string keys and a set values that used to select pods. The key defines the namespace which pods belong, and the each values is a set of pod names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#pods DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#pods}
  */
  readonly pods?: { [key: string]: string[] } | cdktf.IResolvable;
}

export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTimeChaosSelectorToTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTimeChaosSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotation_selectors: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotationSelectors),
    expression_selectors: cdktf.listMapper(dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTimeChaosSelectorExpressionSelectorsToTerraform, false)(struct!.expressionSelectors),
    field_selectors: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.fieldSelectors),
    label_selectors: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labelSelectors),
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    node_selectors: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelectors),
    nodes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nodes),
    pod_phase_selectors: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.podPhaseSelectors),
    pods: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct!.pods),
  }
}


export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTimeChaosSelectorToHclTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTimeChaosSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotation_selectors: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.annotationSelectors),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    expression_selectors: {
      value: cdktf.listMapperHcl(dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTimeChaosSelectorExpressionSelectorsToHclTerraform, false)(struct!.expressionSelectors),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTimeChaosSelectorExpressionSelectorsList",
    },
    field_selectors: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.fieldSelectors),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    label_selectors: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labelSelectors),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    node_selectors: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelectors),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    nodes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nodes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    pod_phase_selectors: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.podPhaseSelectors),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    pods: {
      value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(struct!.pods),
      isBlock: false,
      type: "map",
      storageClassType: "stringListMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTimeChaosSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTimeChaosSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotationSelectors !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotationSelectors = this._annotationSelectors;
    }
    if (this._expressionSelectors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.expressionSelectors = this._expressionSelectors?.internalValue;
    }
    if (this._fieldSelectors !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldSelectors = this._fieldSelectors;
    }
    if (this._labelSelectors !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelectors = this._labelSelectors;
    }
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._nodeSelectors !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelectors = this._nodeSelectors;
    }
    if (this._nodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodes = this._nodes;
    }
    if (this._podPhaseSelectors !== undefined) {
      hasAnyValues = true;
      internalValueResult.podPhaseSelectors = this._podPhaseSelectors;
    }
    if (this._pods !== undefined) {
      hasAnyValues = true;
      internalValueResult.pods = this._pods;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTimeChaosSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotationSelectors = undefined;
      this._expressionSelectors.internalValue = undefined;
      this._fieldSelectors = undefined;
      this._labelSelectors = undefined;
      this._namespaces = undefined;
      this._nodeSelectors = undefined;
      this._nodes = undefined;
      this._podPhaseSelectors = undefined;
      this._pods = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotationSelectors = value.annotationSelectors;
      this._expressionSelectors.internalValue = value.expressionSelectors;
      this._fieldSelectors = value.fieldSelectors;
      this._labelSelectors = value.labelSelectors;
      this._namespaces = value.namespaces;
      this._nodeSelectors = value.nodeSelectors;
      this._nodes = value.nodes;
      this._podPhaseSelectors = value.podPhaseSelectors;
      this._pods = value.pods;
    }
  }

  // annotation_selectors - computed: false, optional: true, required: false
  private _annotationSelectors?: { [key: string]: string }; 
  public get annotationSelectors() {
    return this.getStringMapAttribute('annotation_selectors');
  }
  public set annotationSelectors(value: { [key: string]: string }) {
    this._annotationSelectors = value;
  }
  public resetAnnotationSelectors() {
    this._annotationSelectors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationSelectorsInput() {
    return this._annotationSelectors;
  }

  // expression_selectors - computed: false, optional: true, required: false
  private _expressionSelectors = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTimeChaosSelectorExpressionSelectorsList(this, "expression_selectors", false);
  public get expressionSelectors() {
    return this._expressionSelectors;
  }
  public putExpressionSelectors(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTimeChaosSelectorExpressionSelectors[] | cdktf.IResolvable) {
    this._expressionSelectors.internalValue = value;
  }
  public resetExpressionSelectors() {
    this._expressionSelectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionSelectorsInput() {
    return this._expressionSelectors.internalValue;
  }

  // field_selectors - computed: false, optional: true, required: false
  private _fieldSelectors?: { [key: string]: string }; 
  public get fieldSelectors() {
    return this.getStringMapAttribute('field_selectors');
  }
  public set fieldSelectors(value: { [key: string]: string }) {
    this._fieldSelectors = value;
  }
  public resetFieldSelectors() {
    this._fieldSelectors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldSelectorsInput() {
    return this._fieldSelectors;
  }

  // label_selectors - computed: false, optional: true, required: false
  private _labelSelectors?: { [key: string]: string }; 
  public get labelSelectors() {
    return this.getStringMapAttribute('label_selectors');
  }
  public set labelSelectors(value: { [key: string]: string }) {
    this._labelSelectors = value;
  }
  public resetLabelSelectors() {
    this._labelSelectors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorsInput() {
    return this._labelSelectors;
  }

  // namespaces - computed: false, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }

  // node_selectors - computed: false, optional: true, required: false
  private _nodeSelectors?: { [key: string]: string }; 
  public get nodeSelectors() {
    return this.getStringMapAttribute('node_selectors');
  }
  public set nodeSelectors(value: { [key: string]: string }) {
    this._nodeSelectors = value;
  }
  public resetNodeSelectors() {
    this._nodeSelectors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorsInput() {
    return this._nodeSelectors;
  }

  // nodes - computed: false, optional: true, required: false
  private _nodes?: string[]; 
  public get nodes() {
    return this.getListAttribute('nodes');
  }
  public set nodes(value: string[]) {
    this._nodes = value;
  }
  public resetNodes() {
    this._nodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodesInput() {
    return this._nodes;
  }

  // pod_phase_selectors - computed: false, optional: true, required: false
  private _podPhaseSelectors?: string[]; 
  public get podPhaseSelectors() {
    return this.getListAttribute('pod_phase_selectors');
  }
  public set podPhaseSelectors(value: string[]) {
    this._podPhaseSelectors = value;
  }
  public resetPodPhaseSelectors() {
    this._podPhaseSelectors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podPhaseSelectorsInput() {
    return this._podPhaseSelectors;
  }

  // pods - computed: false, optional: true, required: false
  private _pods?: { [key: string]: string[] } | cdktf.IResolvable; 
  public get pods() {
    return this.interpolationForAttribute('pods');
  }
  public set pods(value: { [key: string]: string[] } | cdktf.IResolvable) {
    this._pods = value;
  }
  public resetPods() {
    this._pods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podsInput() {
    return this._pods;
  }
}
export interface DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTimeChaos {
  /**
  * ClockIds defines all affected clock id All available options are ['CLOCK_REALTIME','CLOCK_MONOTONIC','CLOCK_PROCESS_CPUTIME_ID','CLOCK_THREAD_CPUTIME_ID', 'CLOCK_MONOTONIC_RAW','CLOCK_REALTIME_COARSE','CLOCK_MONOTONIC_COARSE','CLOCK_BOOTTIME','CLOCK_REALTIME_ALARM', 'CLOCK_BOOTTIME_ALARM'] Default value is ['CLOCK_REALTIME']
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#clock_ids DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#clock_ids}
  */
  readonly clockIds?: string[];
  /**
  * ContainerNames indicates list of the name of affected container. If not set, the first container will be injected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#container_names DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#container_names}
  */
  readonly containerNames?: string[];
  /**
  * Duration represents the duration of the chaos action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#duration DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#duration}
  */
  readonly duration?: string;
  /**
  * Mode defines the mode to run chaos action. Supported mode: one / all / fixed / fixed-percent / random-max-percent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#mode DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#mode}
  */
  readonly mode: string;
  /**
  * RemoteCluster represents the remote cluster where the chaos will be deployed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#remote_cluster DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#remote_cluster}
  */
  readonly remoteCluster?: string;
  /**
  * Selector is used to select pods that are used to inject chaos action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#selector DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#selector}
  */
  readonly selector: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTimeChaosSelector;
  /**
  * TimeOffset defines the delta time of injected program. It's a possibly signed sequence of decimal numbers, such as '300ms', '-1.5h' or '2h45m'. Valid time units are 'ns', 'us' (or 'µs'), 'ms', 's', 'm', 'h'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#time_offset DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#time_offset}
  */
  readonly timeOffset: string;
  /**
  * Value is required when the mode is set to 'FixedMode' / 'FixedPercentMode' / 'RandomMaxPercentMode'. If 'FixedMode', provide an integer of pods to do chaos action. If 'FixedPercentMode', provide a number from 0-100 to specify the percent of pods the server can do chaos action. IF 'RandomMaxPercentMode', provide a number from 0-100 to specify the max percent of pods to do chaos action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#value DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTimeChaosToTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTimeChaos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clock_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.clockIds),
    container_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.containerNames),
    duration: cdktf.stringToTerraform(struct!.duration),
    mode: cdktf.stringToTerraform(struct!.mode),
    remote_cluster: cdktf.stringToTerraform(struct!.remoteCluster),
    selector: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTimeChaosSelectorToTerraform(struct!.selector),
    time_offset: cdktf.stringToTerraform(struct!.timeOffset),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTimeChaosToHclTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTimeChaos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clock_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.clockIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    container_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.containerNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_cluster: {
      value: cdktf.stringToHclTerraform(struct!.remoteCluster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTimeChaosSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTimeChaosSelector",
    },
    time_offset: {
      value: cdktf.stringToHclTerraform(struct!.timeOffset),
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

export class DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTimeChaosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTimeChaos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clockIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.clockIds = this._clockIds;
    }
    if (this._containerNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerNames = this._containerNames;
    }
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._remoteCluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteCluster = this._remoteCluster;
    }
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
    }
    if (this._timeOffset !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeOffset = this._timeOffset;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTimeChaos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clockIds = undefined;
      this._containerNames = undefined;
      this._duration = undefined;
      this._mode = undefined;
      this._remoteCluster = undefined;
      this._selector.internalValue = undefined;
      this._timeOffset = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clockIds = value.clockIds;
      this._containerNames = value.containerNames;
      this._duration = value.duration;
      this._mode = value.mode;
      this._remoteCluster = value.remoteCluster;
      this._selector.internalValue = value.selector;
      this._timeOffset = value.timeOffset;
      this._value = value.value;
    }
  }

  // clock_ids - computed: false, optional: true, required: false
  private _clockIds?: string[]; 
  public get clockIds() {
    return this.getListAttribute('clock_ids');
  }
  public set clockIds(value: string[]) {
    this._clockIds = value;
  }
  public resetClockIds() {
    this._clockIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clockIdsInput() {
    return this._clockIds;
  }

  // container_names - computed: false, optional: true, required: false
  private _containerNames?: string[]; 
  public get containerNames() {
    return this.getListAttribute('container_names');
  }
  public set containerNames(value: string[]) {
    this._containerNames = value;
  }
  public resetContainerNames() {
    this._containerNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNamesInput() {
    return this._containerNames;
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // remote_cluster - computed: false, optional: true, required: false
  private _remoteCluster?: string; 
  public get remoteCluster() {
    return this.getStringAttribute('remote_cluster');
  }
  public set remoteCluster(value: string) {
    this._remoteCluster = value;
  }
  public resetRemoteCluster() {
    this._remoteCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteClusterInput() {
    return this._remoteCluster;
  }

  // selector - computed: false, optional: false, required: true
  private _selector = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTimeChaosSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTimeChaosSelector) {
    this._selector.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector.internalValue;
  }

  // time_offset - computed: false, optional: false, required: true
  private _timeOffset?: string; 
  public get timeOffset() {
    return this.getStringAttribute('time_offset');
  }
  public set timeOffset(value: string) {
    this._timeOffset = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeOffsetInput() {
    return this._timeOffset;
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
export interface DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplates {
  /**
  * AbortWithStatusCheck describe whether to abort the workflow when the failure threshold of StatusCheck is exceeded. Only used when Type is TypeStatusCheck.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#abort_with_status_check DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#abort_with_status_check}
  */
  readonly abortWithStatusCheck?: boolean | cdktf.IResolvable;
  /**
  * AWSChaosSpec is the content of the specification for an AWSChaos
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#aws_chaos DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#aws_chaos}
  */
  readonly awsChaos?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesAwsChaos;
  /**
  * AzureChaosSpec is the content of the specification for an AzureChaos
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#azure_chaos DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#azure_chaos}
  */
  readonly azureChaos?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesAzureChaos;
  /**
  * BlockChaosSpec is the content of the specification for a BlockChaos
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#block_chaos DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#block_chaos}
  */
  readonly blockChaos?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesBlockChaos;
  /**
  * Children describes the children steps of serial or parallel node. Only used when Type is TypeSerial or TypeParallel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#children DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#children}
  */
  readonly children?: string[];
  /**
  * ConditionalBranches describes the conditional branches of custom tasks. Only used when Type is TypeTask.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#conditional_branches DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#conditional_branches}
  */
  readonly conditionalBranches?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesConditionalBranches[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#deadline DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#deadline}
  */
  readonly deadline?: string;
  /**
  * DNSChaosSpec defines the desired state of DNSChaos
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#dns_chaos DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#dns_chaos}
  */
  readonly dnsChaos?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesDnsChaos;
  /**
  * GCPChaosSpec is the content of the specification for a GCPChaos
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#gcp_chaos DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#gcp_chaos}
  */
  readonly gcpChaos?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesGcpChaos;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#http_chaos DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#http_chaos}
  */
  readonly httpChaos?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesHttpChaos;
  /**
  * IOChaosSpec defines the desired state of IOChaos
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#io_chaos DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#io_chaos}
  */
  readonly ioChaos?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesIoChaos;
  /**
  * JVMChaosSpec defines the desired state of JVMChaos
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#jvm_chaos DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#jvm_chaos}
  */
  readonly jvmChaos?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesJvmChaos;
  /**
  * KernelChaosSpec defines the desired state of KernelChaos
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#kernel_chaos DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#kernel_chaos}
  */
  readonly kernelChaos?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesKernelChaos;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#name DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * NetworkChaosSpec defines the desired state of NetworkChaos
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#network_chaos DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#network_chaos}
  */
  readonly networkChaos?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesNetworkChaos;
  /**
  * PhysicalMachineChaosSpec defines the desired state of PhysicalMachineChaos
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#physicalmachine_chaos DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#physicalmachine_chaos}
  */
  readonly physicalmachineChaos?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesPhysicalmachineChaos;
  /**
  * PodChaosSpec defines the attributes that a user creates on a chaos experiment about pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#pod_chaos DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#pod_chaos}
  */
  readonly podChaos?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesPodChaos;
  /**
  * Schedule describe the Schedule(describing scheduled chaos) to be injected with chaos nodes. Only used when Type is TypeSchedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#schedule DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#schedule}
  */
  readonly schedule?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesSchedule;
  /**
  * StatusCheck describe the behavior of StatusCheck. Only used when Type is TypeStatusCheck.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#status_check DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#status_check}
  */
  readonly statusCheck?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesStatusCheck;
  /**
  * StressChaosSpec defines the desired state of StressChaos
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#stress_chaos DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#stress_chaos}
  */
  readonly stressChaos?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesStressChaos;
  /**
  * Task describes the behavior of the custom task. Only used when Type is TypeTask.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#task DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#task}
  */
  readonly task?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTask;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#template_type DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#template_type}
  */
  readonly templateType: string;
  /**
  * TimeChaosSpec defines the desired state of TimeChaos
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#time_chaos DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#time_chaos}
  */
  readonly timeChaos?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTimeChaos;
}

export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesToTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    abort_with_status_check: cdktf.booleanToTerraform(struct!.abortWithStatusCheck),
    aws_chaos: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesAwsChaosToTerraform(struct!.awsChaos),
    azure_chaos: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesAzureChaosToTerraform(struct!.azureChaos),
    block_chaos: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesBlockChaosToTerraform(struct!.blockChaos),
    children: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.children),
    conditional_branches: cdktf.listMapper(dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesConditionalBranchesToTerraform, false)(struct!.conditionalBranches),
    deadline: cdktf.stringToTerraform(struct!.deadline),
    dns_chaos: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesDnsChaosToTerraform(struct!.dnsChaos),
    gcp_chaos: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesGcpChaosToTerraform(struct!.gcpChaos),
    http_chaos: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesHttpChaosToTerraform(struct!.httpChaos),
    io_chaos: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesIoChaosToTerraform(struct!.ioChaos),
    jvm_chaos: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesJvmChaosToTerraform(struct!.jvmChaos),
    kernel_chaos: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesKernelChaosToTerraform(struct!.kernelChaos),
    name: cdktf.stringToTerraform(struct!.name),
    network_chaos: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesNetworkChaosToTerraform(struct!.networkChaos),
    physicalmachine_chaos: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesPhysicalmachineChaosToTerraform(struct!.physicalmachineChaos),
    pod_chaos: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesPodChaosToTerraform(struct!.podChaos),
    schedule: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesScheduleToTerraform(struct!.schedule),
    status_check: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesStatusCheckToTerraform(struct!.statusCheck),
    stress_chaos: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesStressChaosToTerraform(struct!.stressChaos),
    task: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskToTerraform(struct!.task),
    template_type: cdktf.stringToTerraform(struct!.templateType),
    time_chaos: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTimeChaosToTerraform(struct!.timeChaos),
  }
}


export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesToHclTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    abort_with_status_check: {
      value: cdktf.booleanToHclTerraform(struct!.abortWithStatusCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    aws_chaos: {
      value: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesAwsChaosToHclTerraform(struct!.awsChaos),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesAwsChaos",
    },
    azure_chaos: {
      value: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesAzureChaosToHclTerraform(struct!.azureChaos),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesAzureChaos",
    },
    block_chaos: {
      value: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesBlockChaosToHclTerraform(struct!.blockChaos),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesBlockChaos",
    },
    children: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.children),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    conditional_branches: {
      value: cdktf.listMapperHcl(dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesConditionalBranchesToHclTerraform, false)(struct!.conditionalBranches),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesConditionalBranchesList",
    },
    deadline: {
      value: cdktf.stringToHclTerraform(struct!.deadline),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_chaos: {
      value: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesDnsChaosToHclTerraform(struct!.dnsChaos),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesDnsChaos",
    },
    gcp_chaos: {
      value: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesGcpChaosToHclTerraform(struct!.gcpChaos),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesGcpChaos",
    },
    http_chaos: {
      value: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesHttpChaosToHclTerraform(struct!.httpChaos),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesHttpChaos",
    },
    io_chaos: {
      value: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesIoChaosToHclTerraform(struct!.ioChaos),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesIoChaos",
    },
    jvm_chaos: {
      value: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesJvmChaosToHclTerraform(struct!.jvmChaos),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesJvmChaos",
    },
    kernel_chaos: {
      value: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesKernelChaosToHclTerraform(struct!.kernelChaos),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesKernelChaos",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_chaos: {
      value: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesNetworkChaosToHclTerraform(struct!.networkChaos),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesNetworkChaos",
    },
    physicalmachine_chaos: {
      value: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesPhysicalmachineChaosToHclTerraform(struct!.physicalmachineChaos),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesPhysicalmachineChaos",
    },
    pod_chaos: {
      value: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesPodChaosToHclTerraform(struct!.podChaos),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesPodChaos",
    },
    schedule: {
      value: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesScheduleToHclTerraform(struct!.schedule),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesSchedule",
    },
    status_check: {
      value: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesStatusCheckToHclTerraform(struct!.statusCheck),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesStatusCheck",
    },
    stress_chaos: {
      value: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesStressChaosToHclTerraform(struct!.stressChaos),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesStressChaos",
    },
    task: {
      value: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskToHclTerraform(struct!.task),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTask",
    },
    template_type: {
      value: cdktf.stringToHclTerraform(struct!.templateType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_chaos: {
      value: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTimeChaosToHclTerraform(struct!.timeChaos),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTimeChaos",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._abortWithStatusCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.abortWithStatusCheck = this._abortWithStatusCheck;
    }
    if (this._awsChaos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsChaos = this._awsChaos?.internalValue;
    }
    if (this._azureChaos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureChaos = this._azureChaos?.internalValue;
    }
    if (this._blockChaos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockChaos = this._blockChaos?.internalValue;
    }
    if (this._children !== undefined) {
      hasAnyValues = true;
      internalValueResult.children = this._children;
    }
    if (this._conditionalBranches?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionalBranches = this._conditionalBranches?.internalValue;
    }
    if (this._deadline !== undefined) {
      hasAnyValues = true;
      internalValueResult.deadline = this._deadline;
    }
    if (this._dnsChaos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsChaos = this._dnsChaos?.internalValue;
    }
    if (this._gcpChaos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpChaos = this._gcpChaos?.internalValue;
    }
    if (this._httpChaos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpChaos = this._httpChaos?.internalValue;
    }
    if (this._ioChaos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ioChaos = this._ioChaos?.internalValue;
    }
    if (this._jvmChaos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jvmChaos = this._jvmChaos?.internalValue;
    }
    if (this._kernelChaos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kernelChaos = this._kernelChaos?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._networkChaos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkChaos = this._networkChaos?.internalValue;
    }
    if (this._physicalmachineChaos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.physicalmachineChaos = this._physicalmachineChaos?.internalValue;
    }
    if (this._podChaos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podChaos = this._podChaos?.internalValue;
    }
    if (this._schedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule?.internalValue;
    }
    if (this._statusCheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCheck = this._statusCheck?.internalValue;
    }
    if (this._stressChaos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stressChaos = this._stressChaos?.internalValue;
    }
    if (this._task?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.task = this._task?.internalValue;
    }
    if (this._templateType !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateType = this._templateType;
    }
    if (this._timeChaos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeChaos = this._timeChaos?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._abortWithStatusCheck = undefined;
      this._awsChaos.internalValue = undefined;
      this._azureChaos.internalValue = undefined;
      this._blockChaos.internalValue = undefined;
      this._children = undefined;
      this._conditionalBranches.internalValue = undefined;
      this._deadline = undefined;
      this._dnsChaos.internalValue = undefined;
      this._gcpChaos.internalValue = undefined;
      this._httpChaos.internalValue = undefined;
      this._ioChaos.internalValue = undefined;
      this._jvmChaos.internalValue = undefined;
      this._kernelChaos.internalValue = undefined;
      this._name = undefined;
      this._networkChaos.internalValue = undefined;
      this._physicalmachineChaos.internalValue = undefined;
      this._podChaos.internalValue = undefined;
      this._schedule.internalValue = undefined;
      this._statusCheck.internalValue = undefined;
      this._stressChaos.internalValue = undefined;
      this._task.internalValue = undefined;
      this._templateType = undefined;
      this._timeChaos.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._abortWithStatusCheck = value.abortWithStatusCheck;
      this._awsChaos.internalValue = value.awsChaos;
      this._azureChaos.internalValue = value.azureChaos;
      this._blockChaos.internalValue = value.blockChaos;
      this._children = value.children;
      this._conditionalBranches.internalValue = value.conditionalBranches;
      this._deadline = value.deadline;
      this._dnsChaos.internalValue = value.dnsChaos;
      this._gcpChaos.internalValue = value.gcpChaos;
      this._httpChaos.internalValue = value.httpChaos;
      this._ioChaos.internalValue = value.ioChaos;
      this._jvmChaos.internalValue = value.jvmChaos;
      this._kernelChaos.internalValue = value.kernelChaos;
      this._name = value.name;
      this._networkChaos.internalValue = value.networkChaos;
      this._physicalmachineChaos.internalValue = value.physicalmachineChaos;
      this._podChaos.internalValue = value.podChaos;
      this._schedule.internalValue = value.schedule;
      this._statusCheck.internalValue = value.statusCheck;
      this._stressChaos.internalValue = value.stressChaos;
      this._task.internalValue = value.task;
      this._templateType = value.templateType;
      this._timeChaos.internalValue = value.timeChaos;
    }
  }

  // abort_with_status_check - computed: false, optional: true, required: false
  private _abortWithStatusCheck?: boolean | cdktf.IResolvable; 
  public get abortWithStatusCheck() {
    return this.getBooleanAttribute('abort_with_status_check');
  }
  public set abortWithStatusCheck(value: boolean | cdktf.IResolvable) {
    this._abortWithStatusCheck = value;
  }
  public resetAbortWithStatusCheck() {
    this._abortWithStatusCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get abortWithStatusCheckInput() {
    return this._abortWithStatusCheck;
  }

  // aws_chaos - computed: false, optional: true, required: false
  private _awsChaos = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesAwsChaosOutputReference(this, "aws_chaos");
  public get awsChaos() {
    return this._awsChaos;
  }
  public putAwsChaos(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesAwsChaos) {
    this._awsChaos.internalValue = value;
  }
  public resetAwsChaos() {
    this._awsChaos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsChaosInput() {
    return this._awsChaos.internalValue;
  }

  // azure_chaos - computed: false, optional: true, required: false
  private _azureChaos = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesAzureChaosOutputReference(this, "azure_chaos");
  public get azureChaos() {
    return this._azureChaos;
  }
  public putAzureChaos(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesAzureChaos) {
    this._azureChaos.internalValue = value;
  }
  public resetAzureChaos() {
    this._azureChaos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureChaosInput() {
    return this._azureChaos.internalValue;
  }

  // block_chaos - computed: false, optional: true, required: false
  private _blockChaos = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesBlockChaosOutputReference(this, "block_chaos");
  public get blockChaos() {
    return this._blockChaos;
  }
  public putBlockChaos(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesBlockChaos) {
    this._blockChaos.internalValue = value;
  }
  public resetBlockChaos() {
    this._blockChaos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockChaosInput() {
    return this._blockChaos.internalValue;
  }

  // children - computed: false, optional: true, required: false
  private _children?: string[]; 
  public get children() {
    return this.getListAttribute('children');
  }
  public set children(value: string[]) {
    this._children = value;
  }
  public resetChildren() {
    this._children = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get childrenInput() {
    return this._children;
  }

  // conditional_branches - computed: false, optional: true, required: false
  private _conditionalBranches = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesConditionalBranchesList(this, "conditional_branches", false);
  public get conditionalBranches() {
    return this._conditionalBranches;
  }
  public putConditionalBranches(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesConditionalBranches[] | cdktf.IResolvable) {
    this._conditionalBranches.internalValue = value;
  }
  public resetConditionalBranches() {
    this._conditionalBranches.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionalBranchesInput() {
    return this._conditionalBranches.internalValue;
  }

  // deadline - computed: false, optional: true, required: false
  private _deadline?: string; 
  public get deadline() {
    return this.getStringAttribute('deadline');
  }
  public set deadline(value: string) {
    this._deadline = value;
  }
  public resetDeadline() {
    this._deadline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadlineInput() {
    return this._deadline;
  }

  // dns_chaos - computed: false, optional: true, required: false
  private _dnsChaos = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesDnsChaosOutputReference(this, "dns_chaos");
  public get dnsChaos() {
    return this._dnsChaos;
  }
  public putDnsChaos(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesDnsChaos) {
    this._dnsChaos.internalValue = value;
  }
  public resetDnsChaos() {
    this._dnsChaos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsChaosInput() {
    return this._dnsChaos.internalValue;
  }

  // gcp_chaos - computed: false, optional: true, required: false
  private _gcpChaos = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesGcpChaosOutputReference(this, "gcp_chaos");
  public get gcpChaos() {
    return this._gcpChaos;
  }
  public putGcpChaos(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesGcpChaos) {
    this._gcpChaos.internalValue = value;
  }
  public resetGcpChaos() {
    this._gcpChaos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpChaosInput() {
    return this._gcpChaos.internalValue;
  }

  // http_chaos - computed: false, optional: true, required: false
  private _httpChaos = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesHttpChaosOutputReference(this, "http_chaos");
  public get httpChaos() {
    return this._httpChaos;
  }
  public putHttpChaos(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesHttpChaos) {
    this._httpChaos.internalValue = value;
  }
  public resetHttpChaos() {
    this._httpChaos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpChaosInput() {
    return this._httpChaos.internalValue;
  }

  // io_chaos - computed: false, optional: true, required: false
  private _ioChaos = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesIoChaosOutputReference(this, "io_chaos");
  public get ioChaos() {
    return this._ioChaos;
  }
  public putIoChaos(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesIoChaos) {
    this._ioChaos.internalValue = value;
  }
  public resetIoChaos() {
    this._ioChaos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ioChaosInput() {
    return this._ioChaos.internalValue;
  }

  // jvm_chaos - computed: false, optional: true, required: false
  private _jvmChaos = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesJvmChaosOutputReference(this, "jvm_chaos");
  public get jvmChaos() {
    return this._jvmChaos;
  }
  public putJvmChaos(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesJvmChaos) {
    this._jvmChaos.internalValue = value;
  }
  public resetJvmChaos() {
    this._jvmChaos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jvmChaosInput() {
    return this._jvmChaos.internalValue;
  }

  // kernel_chaos - computed: false, optional: true, required: false
  private _kernelChaos = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesKernelChaosOutputReference(this, "kernel_chaos");
  public get kernelChaos() {
    return this._kernelChaos;
  }
  public putKernelChaos(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesKernelChaos) {
    this._kernelChaos.internalValue = value;
  }
  public resetKernelChaos() {
    this._kernelChaos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kernelChaosInput() {
    return this._kernelChaos.internalValue;
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

  // network_chaos - computed: false, optional: true, required: false
  private _networkChaos = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesNetworkChaosOutputReference(this, "network_chaos");
  public get networkChaos() {
    return this._networkChaos;
  }
  public putNetworkChaos(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesNetworkChaos) {
    this._networkChaos.internalValue = value;
  }
  public resetNetworkChaos() {
    this._networkChaos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkChaosInput() {
    return this._networkChaos.internalValue;
  }

  // physicalmachine_chaos - computed: false, optional: true, required: false
  private _physicalmachineChaos = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesPhysicalmachineChaosOutputReference(this, "physicalmachine_chaos");
  public get physicalmachineChaos() {
    return this._physicalmachineChaos;
  }
  public putPhysicalmachineChaos(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesPhysicalmachineChaos) {
    this._physicalmachineChaos.internalValue = value;
  }
  public resetPhysicalmachineChaos() {
    this._physicalmachineChaos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get physicalmachineChaosInput() {
    return this._physicalmachineChaos.internalValue;
  }

  // pod_chaos - computed: false, optional: true, required: false
  private _podChaos = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesPodChaosOutputReference(this, "pod_chaos");
  public get podChaos() {
    return this._podChaos;
  }
  public putPodChaos(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesPodChaos) {
    this._podChaos.internalValue = value;
  }
  public resetPodChaos() {
    this._podChaos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podChaosInput() {
    return this._podChaos.internalValue;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesSchedule) {
    this._schedule.internalValue = value;
  }
  public resetSchedule() {
    this._schedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }

  // status_check - computed: false, optional: true, required: false
  private _statusCheck = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesStatusCheckOutputReference(this, "status_check");
  public get statusCheck() {
    return this._statusCheck;
  }
  public putStatusCheck(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesStatusCheck) {
    this._statusCheck.internalValue = value;
  }
  public resetStatusCheck() {
    this._statusCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCheckInput() {
    return this._statusCheck.internalValue;
  }

  // stress_chaos - computed: false, optional: true, required: false
  private _stressChaos = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesStressChaosOutputReference(this, "stress_chaos");
  public get stressChaos() {
    return this._stressChaos;
  }
  public putStressChaos(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesStressChaos) {
    this._stressChaos.internalValue = value;
  }
  public resetStressChaos() {
    this._stressChaos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stressChaosInput() {
    return this._stressChaos.internalValue;
  }

  // task - computed: false, optional: true, required: false
  private _task = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTaskOutputReference(this, "task");
  public get task() {
    return this._task;
  }
  public putTask(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTask) {
    this._task.internalValue = value;
  }
  public resetTask() {
    this._task.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskInput() {
    return this._task.internalValue;
  }

  // template_type - computed: false, optional: false, required: true
  private _templateType?: string; 
  public get templateType() {
    return this.getStringAttribute('template_type');
  }
  public set templateType(value: string) {
    this._templateType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateTypeInput() {
    return this._templateType;
  }

  // time_chaos - computed: false, optional: true, required: false
  private _timeChaos = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTimeChaosOutputReference(this, "time_chaos");
  public get timeChaos() {
    return this._timeChaos;
  }
  public putTimeChaos(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesTimeChaos) {
    this._timeChaos.internalValue = value;
  }
  public resetTimeChaos() {
    this._timeChaos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeChaosInput() {
    return this._timeChaos.internalValue;
  }
}

export class DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesList extends cdktf.ComplexList {
  public internalValue? : DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplates[] | cdktf.IResolvable

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
  public get(index: number): DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesOutputReference {
    return new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#entry DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#entry}
  */
  readonly entry: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#templates DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#templates}
  */
  readonly templates: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplates[] | cdktf.IResolvable;
}

export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowToTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entry: cdktf.stringToTerraform(struct!.entry),
    templates: cdktf.listMapper(dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesToTerraform, false)(struct!.templates),
  }
}


export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowToHclTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entry: {
      value: cdktf.stringToHclTerraform(struct!.entry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    templates: {
      value: cdktf.listMapperHcl(dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesToHclTerraform, false)(struct!.templates),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entry !== undefined) {
      hasAnyValues = true;
      internalValueResult.entry = this._entry;
    }
    if (this._templates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.templates = this._templates?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflow | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._entry = undefined;
      this._templates.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._entry = value.entry;
      this._templates.internalValue = value.templates;
    }
  }

  // entry - computed: false, optional: false, required: true
  private _entry?: string; 
  public get entry() {
    return this.getStringAttribute('entry');
  }
  public set entry(value: string) {
    this._entry = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entryInput() {
    return this._entry;
  }

  // templates - computed: false, optional: false, required: true
  private _templates = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplatesList(this, "templates", false);
  public get templates() {
    return this._templates;
  }
  public putTemplates(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowTemplates[] | cdktf.IResolvable) {
    this._templates.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templatesInput() {
    return this._templates.internalValue;
  }
}
export interface DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpec {
  /**
  * AWSChaosSpec is the content of the specification for an AWSChaos
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#aws_chaos DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#aws_chaos}
  */
  readonly awsChaos?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecAwsChaos;
  /**
  * AzureChaosSpec is the content of the specification for an AzureChaos
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#azure_chaos DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#azure_chaos}
  */
  readonly azureChaos?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecAzureChaos;
  /**
  * BlockChaosSpec is the content of the specification for a BlockChaos
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#block_chaos DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#block_chaos}
  */
  readonly blockChaos?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecBlockChaos;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#concurrency_policy DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#concurrency_policy}
  */
  readonly concurrencyPolicy?: string;
  /**
  * DNSChaosSpec defines the desired state of DNSChaos
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#dns_chaos DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#dns_chaos}
  */
  readonly dnsChaos?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecDnsChaos;
  /**
  * GCPChaosSpec is the content of the specification for a GCPChaos
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#gcp_chaos DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#gcp_chaos}
  */
  readonly gcpChaos?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecGcpChaos;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#history_limit DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#history_limit}
  */
  readonly historyLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#http_chaos DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#http_chaos}
  */
  readonly httpChaos?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecHttpChaos;
  /**
  * IOChaosSpec defines the desired state of IOChaos
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#io_chaos DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#io_chaos}
  */
  readonly ioChaos?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecIoChaos;
  /**
  * JVMChaosSpec defines the desired state of JVMChaos
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#jvm_chaos DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#jvm_chaos}
  */
  readonly jvmChaos?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecJvmChaos;
  /**
  * KernelChaosSpec defines the desired state of KernelChaos
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#kernel_chaos DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#kernel_chaos}
  */
  readonly kernelChaos?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecKernelChaos;
  /**
  * NetworkChaosSpec defines the desired state of NetworkChaos
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#network_chaos DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#network_chaos}
  */
  readonly networkChaos?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecNetworkChaos;
  /**
  * PhysicalMachineChaosSpec defines the desired state of PhysicalMachineChaos
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#physicalmachine_chaos DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#physicalmachine_chaos}
  */
  readonly physicalmachineChaos?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecPhysicalmachineChaos;
  /**
  * PodChaosSpec defines the attributes that a user creates on a chaos experiment about pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#pod_chaos DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#pod_chaos}
  */
  readonly podChaos?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecPodChaos;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#schedule DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#schedule}
  */
  readonly schedule: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#starting_deadline_seconds DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#starting_deadline_seconds}
  */
  readonly startingDeadlineSeconds?: number;
  /**
  * StressChaosSpec defines the desired state of StressChaos
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#stress_chaos DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#stress_chaos}
  */
  readonly stressChaos?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecStressChaos;
  /**
  * TimeChaosSpec defines the desired state of TimeChaos
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#time_chaos DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#time_chaos}
  */
  readonly timeChaos?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecTimeChaos;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#type DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.10.20/docs/data-sources/chaos_mesh_org_schedule_v1alpha1_manifest#workflow DataK8SChaosMeshOrgScheduleV1Alpha1Manifest#workflow}
  */
  readonly workflow?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflow;
}

export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecToTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_chaos: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecAwsChaosToTerraform(struct!.awsChaos),
    azure_chaos: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecAzureChaosToTerraform(struct!.azureChaos),
    block_chaos: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecBlockChaosToTerraform(struct!.blockChaos),
    concurrency_policy: cdktf.stringToTerraform(struct!.concurrencyPolicy),
    dns_chaos: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecDnsChaosToTerraform(struct!.dnsChaos),
    gcp_chaos: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecGcpChaosToTerraform(struct!.gcpChaos),
    history_limit: cdktf.numberToTerraform(struct!.historyLimit),
    http_chaos: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecHttpChaosToTerraform(struct!.httpChaos),
    io_chaos: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecIoChaosToTerraform(struct!.ioChaos),
    jvm_chaos: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecJvmChaosToTerraform(struct!.jvmChaos),
    kernel_chaos: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecKernelChaosToTerraform(struct!.kernelChaos),
    network_chaos: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecNetworkChaosToTerraform(struct!.networkChaos),
    physicalmachine_chaos: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecPhysicalmachineChaosToTerraform(struct!.physicalmachineChaos),
    pod_chaos: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecPodChaosToTerraform(struct!.podChaos),
    schedule: cdktf.stringToTerraform(struct!.schedule),
    starting_deadline_seconds: cdktf.numberToTerraform(struct!.startingDeadlineSeconds),
    stress_chaos: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecStressChaosToTerraform(struct!.stressChaos),
    time_chaos: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecTimeChaosToTerraform(struct!.timeChaos),
    type: cdktf.stringToTerraform(struct!.type),
    workflow: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowToTerraform(struct!.workflow),
  }
}


export function dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_chaos: {
      value: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecAwsChaosToHclTerraform(struct!.awsChaos),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecAwsChaos",
    },
    azure_chaos: {
      value: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecAzureChaosToHclTerraform(struct!.azureChaos),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecAzureChaos",
    },
    block_chaos: {
      value: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecBlockChaosToHclTerraform(struct!.blockChaos),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecBlockChaos",
    },
    concurrency_policy: {
      value: cdktf.stringToHclTerraform(struct!.concurrencyPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_chaos: {
      value: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecDnsChaosToHclTerraform(struct!.dnsChaos),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecDnsChaos",
    },
    gcp_chaos: {
      value: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecGcpChaosToHclTerraform(struct!.gcpChaos),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecGcpChaos",
    },
    history_limit: {
      value: cdktf.numberToHclTerraform(struct!.historyLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_chaos: {
      value: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecHttpChaosToHclTerraform(struct!.httpChaos),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecHttpChaos",
    },
    io_chaos: {
      value: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecIoChaosToHclTerraform(struct!.ioChaos),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecIoChaos",
    },
    jvm_chaos: {
      value: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecJvmChaosToHclTerraform(struct!.jvmChaos),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecJvmChaos",
    },
    kernel_chaos: {
      value: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecKernelChaosToHclTerraform(struct!.kernelChaos),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecKernelChaos",
    },
    network_chaos: {
      value: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecNetworkChaosToHclTerraform(struct!.networkChaos),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecNetworkChaos",
    },
    physicalmachine_chaos: {
      value: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecPhysicalmachineChaosToHclTerraform(struct!.physicalmachineChaos),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecPhysicalmachineChaos",
    },
    pod_chaos: {
      value: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecPodChaosToHclTerraform(struct!.podChaos),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecPodChaos",
    },
    schedule: {
      value: cdktf.stringToHclTerraform(struct!.schedule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    starting_deadline_seconds: {
      value: cdktf.numberToHclTerraform(struct!.startingDeadlineSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stress_chaos: {
      value: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecStressChaosToHclTerraform(struct!.stressChaos),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecStressChaos",
    },
    time_chaos: {
      value: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecTimeChaosToHclTerraform(struct!.timeChaos),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecTimeChaos",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workflow: {
      value: dataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowToHclTerraform(struct!.workflow),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflow",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsChaos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsChaos = this._awsChaos?.internalValue;
    }
    if (this._azureChaos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureChaos = this._azureChaos?.internalValue;
    }
    if (this._blockChaos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockChaos = this._blockChaos?.internalValue;
    }
    if (this._concurrencyPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrencyPolicy = this._concurrencyPolicy;
    }
    if (this._dnsChaos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsChaos = this._dnsChaos?.internalValue;
    }
    if (this._gcpChaos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpChaos = this._gcpChaos?.internalValue;
    }
    if (this._historyLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.historyLimit = this._historyLimit;
    }
    if (this._httpChaos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpChaos = this._httpChaos?.internalValue;
    }
    if (this._ioChaos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ioChaos = this._ioChaos?.internalValue;
    }
    if (this._jvmChaos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jvmChaos = this._jvmChaos?.internalValue;
    }
    if (this._kernelChaos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kernelChaos = this._kernelChaos?.internalValue;
    }
    if (this._networkChaos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkChaos = this._networkChaos?.internalValue;
    }
    if (this._physicalmachineChaos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.physicalmachineChaos = this._physicalmachineChaos?.internalValue;
    }
    if (this._podChaos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podChaos = this._podChaos?.internalValue;
    }
    if (this._schedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule;
    }
    if (this._startingDeadlineSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.startingDeadlineSeconds = this._startingDeadlineSeconds;
    }
    if (this._stressChaos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stressChaos = this._stressChaos?.internalValue;
    }
    if (this._timeChaos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeChaos = this._timeChaos?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._workflow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workflow = this._workflow?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsChaos.internalValue = undefined;
      this._azureChaos.internalValue = undefined;
      this._blockChaos.internalValue = undefined;
      this._concurrencyPolicy = undefined;
      this._dnsChaos.internalValue = undefined;
      this._gcpChaos.internalValue = undefined;
      this._historyLimit = undefined;
      this._httpChaos.internalValue = undefined;
      this._ioChaos.internalValue = undefined;
      this._jvmChaos.internalValue = undefined;
      this._kernelChaos.internalValue = undefined;
      this._networkChaos.internalValue = undefined;
      this._physicalmachineChaos.internalValue = undefined;
      this._podChaos.internalValue = undefined;
      this._schedule = undefined;
      this._startingDeadlineSeconds = undefined;
      this._stressChaos.internalValue = undefined;
      this._timeChaos.internalValue = undefined;
      this._type = undefined;
      this._workflow.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsChaos.internalValue = value.awsChaos;
      this._azureChaos.internalValue = value.azureChaos;
      this._blockChaos.internalValue = value.blockChaos;
      this._concurrencyPolicy = value.concurrencyPolicy;
      this._dnsChaos.internalValue = value.dnsChaos;
      this._gcpChaos.internalValue = value.gcpChaos;
      this._historyLimit = value.historyLimit;
      this._httpChaos.internalValue = value.httpChaos;
      this._ioChaos.internalValue = value.ioChaos;
      this._jvmChaos.internalValue = value.jvmChaos;
      this._kernelChaos.internalValue = value.kernelChaos;
      this._networkChaos.internalValue = value.networkChaos;
      this._physicalmachineChaos.internalValue = value.physicalmachineChaos;
      this._podChaos.internalValue = value.podChaos;
      this._schedule = value.schedule;
      this._startingDeadlineSeconds = value.startingDeadlineSeconds;
      this._stressChaos.internalValue = value.stressChaos;
      this._timeChaos.internalValue = value.timeChaos;
      this._type = value.type;
      this._workflow.internalValue = value.workflow;
    }
  }

  // aws_chaos - computed: false, optional: true, required: false
  private _awsChaos = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecAwsChaosOutputReference(this, "aws_chaos");
  public get awsChaos() {
    return this._awsChaos;
  }
  public putAwsChaos(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecAwsChaos) {
    this._awsChaos.internalValue = value;
  }
  public resetAwsChaos() {
    this._awsChaos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsChaosInput() {
    return this._awsChaos.internalValue;
  }

  // azure_chaos - computed: false, optional: true, required: false
  private _azureChaos = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecAzureChaosOutputReference(this, "azure_chaos");
  public get azureChaos() {
    return this._azureChaos;
  }
  public putAzureChaos(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecAzureChaos) {
    this._azureChaos.internalValue = value;
  }
  public resetAzureChaos() {
    this._azureChaos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureChaosInput() {
    return this._azureChaos.internalValue;
  }

  // block_chaos - computed: false, optional: true, required: false
  private _blockChaos = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecBlockChaosOutputReference(this, "block_chaos");
  public get blockChaos() {
    return this._blockChaos;
  }
  public putBlockChaos(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecBlockChaos) {
    this._blockChaos.internalValue = value;
  }
  public resetBlockChaos() {
    this._blockChaos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockChaosInput() {
    return this._blockChaos.internalValue;
  }

  // concurrency_policy - computed: false, optional: true, required: false
  private _concurrencyPolicy?: string; 
  public get concurrencyPolicy() {
    return this.getStringAttribute('concurrency_policy');
  }
  public set concurrencyPolicy(value: string) {
    this._concurrencyPolicy = value;
  }
  public resetConcurrencyPolicy() {
    this._concurrencyPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrencyPolicyInput() {
    return this._concurrencyPolicy;
  }

  // dns_chaos - computed: false, optional: true, required: false
  private _dnsChaos = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecDnsChaosOutputReference(this, "dns_chaos");
  public get dnsChaos() {
    return this._dnsChaos;
  }
  public putDnsChaos(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecDnsChaos) {
    this._dnsChaos.internalValue = value;
  }
  public resetDnsChaos() {
    this._dnsChaos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsChaosInput() {
    return this._dnsChaos.internalValue;
  }

  // gcp_chaos - computed: false, optional: true, required: false
  private _gcpChaos = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecGcpChaosOutputReference(this, "gcp_chaos");
  public get gcpChaos() {
    return this._gcpChaos;
  }
  public putGcpChaos(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecGcpChaos) {
    this._gcpChaos.internalValue = value;
  }
  public resetGcpChaos() {
    this._gcpChaos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpChaosInput() {
    return this._gcpChaos.internalValue;
  }

  // history_limit - computed: false, optional: true, required: false
  private _historyLimit?: number; 
  public get historyLimit() {
    return this.getNumberAttribute('history_limit');
  }
  public set historyLimit(value: number) {
    this._historyLimit = value;
  }
  public resetHistoryLimit() {
    this._historyLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get historyLimitInput() {
    return this._historyLimit;
  }

  // http_chaos - computed: false, optional: true, required: false
  private _httpChaos = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecHttpChaosOutputReference(this, "http_chaos");
  public get httpChaos() {
    return this._httpChaos;
  }
  public putHttpChaos(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecHttpChaos) {
    this._httpChaos.internalValue = value;
  }
  public resetHttpChaos() {
    this._httpChaos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpChaosInput() {
    return this._httpChaos.internalValue;
  }

  // io_chaos - computed: false, optional: true, required: false
  private _ioChaos = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecIoChaosOutputReference(this, "io_chaos");
  public get ioChaos() {
    return this._ioChaos;
  }
  public putIoChaos(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecIoChaos) {
    this._ioChaos.internalValue = value;
  }
  public resetIoChaos() {
    this._ioChaos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ioChaosInput() {
    return this._ioChaos.internalValue;
  }

  // jvm_chaos - computed: false, optional: true, required: false
  private _jvmChaos = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecJvmChaosOutputReference(this, "jvm_chaos");
  public get jvmChaos() {
    return this._jvmChaos;
  }
  public putJvmChaos(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecJvmChaos) {
    this._jvmChaos.internalValue = value;
  }
  public resetJvmChaos() {
    this._jvmChaos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jvmChaosInput() {
    return this._jvmChaos.internalValue;
  }

  // kernel_chaos - computed: false, optional: true, required: false
  private _kernelChaos = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecKernelChaosOutputReference(this, "kernel_chaos");
  public get kernelChaos() {
    return this._kernelChaos;
  }
  public putKernelChaos(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecKernelChaos) {
    this._kernelChaos.internalValue = value;
  }
  public resetKernelChaos() {
    this._kernelChaos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kernelChaosInput() {
    return this._kernelChaos.internalValue;
  }

  // network_chaos - computed: false, optional: true, required: false
  private _networkChaos = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecNetworkChaosOutputReference(this, "network_chaos");
  public get networkChaos() {
    return this._networkChaos;
  }
  public putNetworkChaos(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecNetworkChaos) {
    this._networkChaos.internalValue = value;
  }
  public resetNetworkChaos() {
    this._networkChaos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkChaosInput() {
    return this._networkChaos.internalValue;
  }

  // physicalmachine_chaos - computed: false, optional: true, required: false
  private _physicalmachineChaos = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecPhysicalmachineChaosOutputReference(this, "physicalmachine_chaos");
  public get physicalmachineChaos() {
    return this._physicalmachineChaos;
  }
  public putPhysicalmachineChaos(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecPhysicalmachineChaos) {
    this._physicalmachineChaos.internalValue = value;
  }
  public resetPhysicalmachineChaos() {
    this._physicalmachineChaos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get physicalmachineChaosInput() {
    return this._physicalmachineChaos.internalValue;
  }

  // pod_chaos - computed: false, optional: true, required: false
  private _podChaos = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecPodChaosOutputReference(this, "pod_chaos");
  public get podChaos() {
    return this._podChaos;
  }
  public putPodChaos(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecPodChaos) {
    this._podChaos.internalValue = value;
  }
  public resetPodChaos() {
    this._podChaos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podChaosInput() {
    return this._podChaos.internalValue;
  }

  // schedule - computed: false, optional: false, required: true
  private _schedule?: string; 
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string) {
    this._schedule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
  }

  // starting_deadline_seconds - computed: false, optional: true, required: false
  private _startingDeadlineSeconds?: number; 
  public get startingDeadlineSeconds() {
    return this.getNumberAttribute('starting_deadline_seconds');
  }
  public set startingDeadlineSeconds(value: number) {
    this._startingDeadlineSeconds = value;
  }
  public resetStartingDeadlineSeconds() {
    this._startingDeadlineSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startingDeadlineSecondsInput() {
    return this._startingDeadlineSeconds;
  }

  // stress_chaos - computed: false, optional: true, required: false
  private _stressChaos = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecStressChaosOutputReference(this, "stress_chaos");
  public get stressChaos() {
    return this._stressChaos;
  }
  public putStressChaos(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecStressChaos) {
    this._stressChaos.internalValue = value;
  }
  public resetStressChaos() {
    this._stressChaos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stressChaosInput() {
    return this._stressChaos.internalValue;
  }

  // time_chaos - computed: false, optional: true, required: false
  private _timeChaos = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecTimeChaosOutputReference(this, "time_chaos");
  public get timeChaos() {
    return this._timeChaos;
  }
  public putTimeChaos(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecTimeChaos) {
    this._timeChaos.internalValue = value;
  }
  public resetTimeChaos() {
    this._timeChaos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeChaosInput() {
    return this._timeChaos.internalValue;
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

  // workflow - computed: false, optional: true, required: false
  private _workflow = new DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflowOutputReference(this, "workflow");
  public get workflow() {
    return this._workflow;
  }
  public putWorkflow(value: DataK8SChaosMeshOrgScheduleV1Alpha1ManifestSpecWorkflow) {
    this._workflow.internalValue = value;
  }
  public resetWorkflow() {
    this._workflow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowInput() {
    return this._workflow.internalValue;
  }
}
