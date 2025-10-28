// https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/launch_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LaunchTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/launch_template#default_version LaunchTemplate#default_version}
  */
  readonly defaultVersion?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/launch_template#description LaunchTemplate#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/launch_template#disable_api_termination LaunchTemplate#disable_api_termination}
  */
  readonly disableApiTermination?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/launch_template#ebs_optimized LaunchTemplate#ebs_optimized}
  */
  readonly ebsOptimized?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/launch_template#id LaunchTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/launch_template#image_id LaunchTemplate#image_id}
  */
  readonly imageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/launch_template#instance_initiated_shutdown_behavior LaunchTemplate#instance_initiated_shutdown_behavior}
  */
  readonly instanceInitiatedShutdownBehavior?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/launch_template#instance_type LaunchTemplate#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/launch_template#kernel_id LaunchTemplate#kernel_id}
  */
  readonly kernelId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/launch_template#key_name LaunchTemplate#key_name}
  */
  readonly keyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/launch_template#name LaunchTemplate#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/launch_template#name_prefix LaunchTemplate#name_prefix}
  */
  readonly namePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/launch_template#ram_disk_id LaunchTemplate#ram_disk_id}
  */
  readonly ramDiskId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/launch_template#security_group_names LaunchTemplate#security_group_names}
  */
  readonly securityGroupNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/launch_template#tags LaunchTemplate#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/launch_template#update_default_version LaunchTemplate#update_default_version}
  */
  readonly updateDefaultVersion?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/launch_template#user_data LaunchTemplate#user_data}
  */
  readonly userData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/launch_template#vpc_security_group_ids LaunchTemplate#vpc_security_group_ids}
  */
  readonly vpcSecurityGroupIds?: string[];
  /**
  * block_device_mappings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/launch_template#block_device_mappings LaunchTemplate#block_device_mappings}
  */
  readonly blockDeviceMappings?: LaunchTemplateBlockDeviceMappings[] | cdktf.IResolvable;
  /**
  * capacity_reservation_specification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/launch_template#capacity_reservation_specification LaunchTemplate#capacity_reservation_specification}
  */
  readonly capacityReservationSpecification?: LaunchTemplateCapacityReservationSpecification;
  /**
  * cpu_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/launch_template#cpu_options LaunchTemplate#cpu_options}
  */
  readonly cpuOptions?: LaunchTemplateCpuOptions;
  /**
  * credit_specification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/launch_template#credit_specification LaunchTemplate#credit_specification}
  */
  readonly creditSpecification?: LaunchTemplateCreditSpecification;
  /**
  * elastic_gpu_specifications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/launch_template#elastic_gpu_specifications LaunchTemplate#elastic_gpu_specifications}
  */
  readonly elasticGpuSpecifications?: LaunchTemplateElasticGpuSpecifications[] | cdktf.IResolvable;
  /**
  * elastic_inference_accelerator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/launch_template#elastic_inference_accelerator LaunchTemplate#elastic_inference_accelerator}
  */
  readonly elasticInferenceAccelerator?: LaunchTemplateElasticInferenceAccelerator;
  /**
  * enclave_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/launch_template#enclave_options LaunchTemplate#enclave_options}
  */
  readonly enclaveOptions?: LaunchTemplateEnclaveOptions;
  /**
  * hibernation_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/launch_template#hibernation_options LaunchTemplate#hibernation_options}
  */
  readonly hibernationOptions?: LaunchTemplateHibernationOptions;
  /**
  * iam_instance_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/launch_template#iam_instance_profile LaunchTemplate#iam_instance_profile}
  */
  readonly iamInstanceProfile?: LaunchTemplateIamInstanceProfile;
  /**
  * instance_market_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/launch_template#instance_market_options LaunchTemplate#instance_market_options}
  */
  readonly instanceMarketOptions?: LaunchTemplateInstanceMarketOptions;
  /**
  * license_specification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/launch_template#license_specification LaunchTemplate#license_specification}
  */
  readonly licenseSpecification?: LaunchTemplateLicenseSpecification[] | cdktf.IResolvable;
  /**
  * metadata_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/launch_template#metadata_options LaunchTemplate#metadata_options}
  */
  readonly metadataOptions?: LaunchTemplateMetadataOptions;
  /**
  * monitoring block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/launch_template#monitoring LaunchTemplate#monitoring}
  */
  readonly monitoring?: LaunchTemplateMonitoring;
  /**
  * network_interfaces block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/launch_template#network_interfaces LaunchTemplate#network_interfaces}
  */
  readonly networkInterfaces?: LaunchTemplateNetworkInterfaces[] | cdktf.IResolvable;
  /**
  * placement block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/launch_template#placement LaunchTemplate#placement}
  */
  readonly placement?: LaunchTemplatePlacement;
  /**
  * tag_specifications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/launch_template#tag_specifications LaunchTemplate#tag_specifications}
  */
  readonly tagSpecifications?: LaunchTemplateTagSpecifications[] | cdktf.IResolvable;
}
export interface LaunchTemplateBlockDeviceMappingsEbs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/launch_template#delete_on_termination LaunchTemplate#delete_on_termination}
  */
  readonly deleteOnTermination?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/launch_template#encrypted LaunchTemplate#encrypted}
  */
  readonly encrypted?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/launch_template#iops LaunchTemplate#iops}
  */
  readonly iops?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/launch_template#kms_key_id LaunchTemplate#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/launch_template#snapshot_id LaunchTemplate#snapshot_id}
  */
  readonly snapshotId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/launch_template#throughput LaunchTemplate#throughput}
  */
  readonly throughput?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/launch_template#volume_size LaunchTemplate#volume_size}
  */
  readonly volumeSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/launch_template#volume_type LaunchTemplate#volume_type}
  */
  readonly volumeType?: string;
}

export function launchTemplateBlockDeviceMappingsEbsToTerraform(struct?: LaunchTemplateBlockDeviceMappingsEbsOutputReference | LaunchTemplateBlockDeviceMappingsEbs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete_on_termination: cdktf.stringToTerraform(struct!.deleteOnTermination),
    encrypted: cdktf.stringToTerraform(struct!.encrypted),
    iops: cdktf.numberToTerraform(struct!.iops),
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    snapshot_id: cdktf.stringToTerraform(struct!.snapshotId),
    throughput: cdktf.numberToTerraform(struct!.throughput),
    volume_size: cdktf.numberToTerraform(struct!.volumeSize),
    volume_type: cdktf.stringToTerraform(struct!.volumeType),
  }
}


export function launchTemplateBlockDeviceMappingsEbsToHclTerraform(struct?: LaunchTemplateBlockDeviceMappingsEbsOutputReference | LaunchTemplateBlockDeviceMappingsEbs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delete_on_termination: {
      value: cdktf.stringToHclTerraform(struct!.deleteOnTermination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encrypted: {
      value: cdktf.stringToHclTerraform(struct!.encrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iops: {
      value: cdktf.numberToHclTerraform(struct!.iops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snapshot_id: {
      value: cdktf.stringToHclTerraform(struct!.snapshotId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    throughput: {
      value: cdktf.numberToHclTerraform(struct!.throughput),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    volume_size: {
      value: cdktf.numberToHclTerraform(struct!.volumeSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    volume_type: {
      value: cdktf.stringToHclTerraform(struct!.volumeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LaunchTemplateBlockDeviceMappingsEbsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LaunchTemplateBlockDeviceMappingsEbs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deleteOnTermination !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteOnTermination = this._deleteOnTermination;
    }
    if (this._encrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.encrypted = this._encrypted;
    }
    if (this._iops !== undefined) {
      hasAnyValues = true;
      internalValueResult.iops = this._iops;
    }
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._snapshotId !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotId = this._snapshotId;
    }
    if (this._throughput !== undefined) {
      hasAnyValues = true;
      internalValueResult.throughput = this._throughput;
    }
    if (this._volumeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeSize = this._volumeSize;
    }
    if (this._volumeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeType = this._volumeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LaunchTemplateBlockDeviceMappingsEbs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deleteOnTermination = undefined;
      this._encrypted = undefined;
      this._iops = undefined;
      this._kmsKeyId = undefined;
      this._snapshotId = undefined;
      this._throughput = undefined;
      this._volumeSize = undefined;
      this._volumeType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deleteOnTermination = value.deleteOnTermination;
      this._encrypted = value.encrypted;
      this._iops = value.iops;
      this._kmsKeyId = value.kmsKeyId;
      this._snapshotId = value.snapshotId;
      this._throughput = value.throughput;
      this._volumeSize = value.volumeSize;
      this._volumeType = value.volumeType;
    }
  }

  // delete_on_termination - computed: false, optional: true, required: false
  private _deleteOnTermination?: string; 
  public get deleteOnTermination() {
    return this.getStringAttribute('delete_on_termination');
  }
  public set deleteOnTermination(value: string) {
    this._deleteOnTermination = value;
  }
  public resetDeleteOnTermination() {
    this._deleteOnTermination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteOnTerminationInput() {
    return this._deleteOnTermination;
  }

  // encrypted - computed: false, optional: true, required: false
  private _encrypted?: string; 
  public get encrypted() {
    return this.getStringAttribute('encrypted');
  }
  public set encrypted(value: string) {
    this._encrypted = value;
  }
  public resetEncrypted() {
    this._encrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedInput() {
    return this._encrypted;
  }

  // iops - computed: true, optional: true, required: false
  private _iops?: number; 
  public get iops() {
    return this.getNumberAttribute('iops');
  }
  public set iops(value: number) {
    this._iops = value;
  }
  public resetIops() {
    this._iops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iopsInput() {
    return this._iops;
  }

  // kms_key_id - computed: false, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // snapshot_id - computed: false, optional: true, required: false
  private _snapshotId?: string; 
  public get snapshotId() {
    return this.getStringAttribute('snapshot_id');
  }
  public set snapshotId(value: string) {
    this._snapshotId = value;
  }
  public resetSnapshotId() {
    this._snapshotId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotIdInput() {
    return this._snapshotId;
  }

  // throughput - computed: true, optional: true, required: false
  private _throughput?: number; 
  public get throughput() {
    return this.getNumberAttribute('throughput');
  }
  public set throughput(value: number) {
    this._throughput = value;
  }
  public resetThroughput() {
    this._throughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throughputInput() {
    return this._throughput;
  }

  // volume_size - computed: true, optional: true, required: false
  private _volumeSize?: number; 
  public get volumeSize() {
    return this.getNumberAttribute('volume_size');
  }
  public set volumeSize(value: number) {
    this._volumeSize = value;
  }
  public resetVolumeSize() {
    this._volumeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeSizeInput() {
    return this._volumeSize;
  }

  // volume_type - computed: true, optional: true, required: false
  private _volumeType?: string; 
  public get volumeType() {
    return this.getStringAttribute('volume_type');
  }
  public set volumeType(value: string) {
    this._volumeType = value;
  }
  public resetVolumeType() {
    this._volumeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeTypeInput() {
    return this._volumeType;
  }
}
export interface LaunchTemplateBlockDeviceMappings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/launch_template#device_name LaunchTemplate#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/launch_template#no_device LaunchTemplate#no_device}
  */
  readonly noDevice?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/launch_template#virtual_name LaunchTemplate#virtual_name}
  */
  readonly virtualName?: string;
  /**
  * ebs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/launch_template#ebs LaunchTemplate#ebs}
  */
  readonly ebs?: LaunchTemplateBlockDeviceMappingsEbs;
}

export function launchTemplateBlockDeviceMappingsToTerraform(struct?: LaunchTemplateBlockDeviceMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_name: cdktf.stringToTerraform(struct!.deviceName),
    no_device: cdktf.stringToTerraform(struct!.noDevice),
    virtual_name: cdktf.stringToTerraform(struct!.virtualName),
    ebs: launchTemplateBlockDeviceMappingsEbsToTerraform(struct!.ebs),
  }
}


export function launchTemplateBlockDeviceMappingsToHclTerraform(struct?: LaunchTemplateBlockDeviceMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device_name: {
      value: cdktf.stringToHclTerraform(struct!.deviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_device: {
      value: cdktf.stringToHclTerraform(struct!.noDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_name: {
      value: cdktf.stringToHclTerraform(struct!.virtualName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ebs: {
      value: launchTemplateBlockDeviceMappingsEbsToHclTerraform(struct!.ebs),
      isBlock: true,
      type: "list",
      storageClassType: "LaunchTemplateBlockDeviceMappingsEbsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LaunchTemplateBlockDeviceMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LaunchTemplateBlockDeviceMappings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceName = this._deviceName;
    }
    if (this._noDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.noDevice = this._noDevice;
    }
    if (this._virtualName !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualName = this._virtualName;
    }
    if (this._ebs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebs = this._ebs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LaunchTemplateBlockDeviceMappings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deviceName = undefined;
      this._noDevice = undefined;
      this._virtualName = undefined;
      this._ebs.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deviceName = value.deviceName;
      this._noDevice = value.noDevice;
      this._virtualName = value.virtualName;
      this._ebs.internalValue = value.ebs;
    }
  }

  // device_name - computed: false, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // no_device - computed: false, optional: true, required: false
  private _noDevice?: string; 
  public get noDevice() {
    return this.getStringAttribute('no_device');
  }
  public set noDevice(value: string) {
    this._noDevice = value;
  }
  public resetNoDevice() {
    this._noDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noDeviceInput() {
    return this._noDevice;
  }

  // virtual_name - computed: false, optional: true, required: false
  private _virtualName?: string; 
  public get virtualName() {
    return this.getStringAttribute('virtual_name');
  }
  public set virtualName(value: string) {
    this._virtualName = value;
  }
  public resetVirtualName() {
    this._virtualName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNameInput() {
    return this._virtualName;
  }

  // ebs - computed: false, optional: true, required: false
  private _ebs = new LaunchTemplateBlockDeviceMappingsEbsOutputReference(this, "ebs");
  public get ebs() {
    return this._ebs;
  }
  public putEbs(value: LaunchTemplateBlockDeviceMappingsEbs) {
    this._ebs.internalValue = value;
  }
  public resetEbs() {
    this._ebs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsInput() {
    return this._ebs.internalValue;
  }
}

export class LaunchTemplateBlockDeviceMappingsList extends cdktf.ComplexList {
  public internalValue? : LaunchTemplateBlockDeviceMappings[] | cdktf.IResolvable

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
  public get(index: number): LaunchTemplateBlockDeviceMappingsOutputReference {
    return new LaunchTemplateBlockDeviceMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/launch_template#capacity_reservation_id LaunchTemplate#capacity_reservation_id}
  */
  readonly capacityReservationId?: string;
}

export function launchTemplateCapacityReservationSpecificationCapacityReservationTargetToTerraform(struct?: LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference | LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capacity_reservation_id: cdktf.stringToTerraform(struct!.capacityReservationId),
  }
}


export function launchTemplateCapacityReservationSpecificationCapacityReservationTargetToHclTerraform(struct?: LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference | LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capacity_reservation_id: {
      value: cdktf.stringToHclTerraform(struct!.capacityReservationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capacityReservationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityReservationId = this._capacityReservationId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._capacityReservationId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._capacityReservationId = value.capacityReservationId;
    }
  }

  // capacity_reservation_id - computed: false, optional: true, required: false
  private _capacityReservationId?: string; 
  public get capacityReservationId() {
    return this.getStringAttribute('capacity_reservation_id');
  }
  public set capacityReservationId(value: string) {
    this._capacityReservationId = value;
  }
  public resetCapacityReservationId() {
    this._capacityReservationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityReservationIdInput() {
    return this._capacityReservationId;
  }
}
export interface LaunchTemplateCapacityReservationSpecification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/launch_template#capacity_reservation_preference LaunchTemplate#capacity_reservation_preference}
  */
  readonly capacityReservationPreference?: string;
  /**
  * capacity_reservation_target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/launch_template#capacity_reservation_target LaunchTemplate#capacity_reservation_target}
  */
  readonly capacityReservationTarget?: LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget;
}

export function launchTemplateCapacityReservationSpecificationToTerraform(struct?: LaunchTemplateCapacityReservationSpecificationOutputReference | LaunchTemplateCapacityReservationSpecification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capacity_reservation_preference: cdktf.stringToTerraform(struct!.capacityReservationPreference),
    capacity_reservation_target: launchTemplateCapacityReservationSpecificationCapacityReservationTargetToTerraform(struct!.capacityReservationTarget),
  }
}


export function launchTemplateCapacityReservationSpecificationToHclTerraform(struct?: LaunchTemplateCapacityReservationSpecificationOutputReference | LaunchTemplateCapacityReservationSpecification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capacity_reservation_preference: {
      value: cdktf.stringToHclTerraform(struct!.capacityReservationPreference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    capacity_reservation_target: {
      value: launchTemplateCapacityReservationSpecificationCapacityReservationTargetToHclTerraform(struct!.capacityReservationTarget),
      isBlock: true,
      type: "list",
      storageClassType: "LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LaunchTemplateCapacityReservationSpecificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LaunchTemplateCapacityReservationSpecification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capacityReservationPreference !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityReservationPreference = this._capacityReservationPreference;
    }
    if (this._capacityReservationTarget?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityReservationTarget = this._capacityReservationTarget?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LaunchTemplateCapacityReservationSpecification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._capacityReservationPreference = undefined;
      this._capacityReservationTarget.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._capacityReservationPreference = value.capacityReservationPreference;
      this._capacityReservationTarget.internalValue = value.capacityReservationTarget;
    }
  }

  // capacity_reservation_preference - computed: false, optional: true, required: false
  private _capacityReservationPreference?: string; 
  public get capacityReservationPreference() {
    return this.getStringAttribute('capacity_reservation_preference');
  }
  public set capacityReservationPreference(value: string) {
    this._capacityReservationPreference = value;
  }
  public resetCapacityReservationPreference() {
    this._capacityReservationPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityReservationPreferenceInput() {
    return this._capacityReservationPreference;
  }

  // capacity_reservation_target - computed: false, optional: true, required: false
  private _capacityReservationTarget = new LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference(this, "capacity_reservation_target");
  public get capacityReservationTarget() {
    return this._capacityReservationTarget;
  }
  public putCapacityReservationTarget(value: LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget) {
    this._capacityReservationTarget.internalValue = value;
  }
  public resetCapacityReservationTarget() {
    this._capacityReservationTarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityReservationTargetInput() {
    return this._capacityReservationTarget.internalValue;
  }
}
export interface LaunchTemplateCpuOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/launch_template#core_count LaunchTemplate#core_count}
  */
  readonly coreCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/launch_template#threads_per_core LaunchTemplate#threads_per_core}
  */
  readonly threadsPerCore?: number;
}

export function launchTemplateCpuOptionsToTerraform(struct?: LaunchTemplateCpuOptionsOutputReference | LaunchTemplateCpuOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    core_count: cdktf.numberToTerraform(struct!.coreCount),
    threads_per_core: cdktf.numberToTerraform(struct!.threadsPerCore),
  }
}


export function launchTemplateCpuOptionsToHclTerraform(struct?: LaunchTemplateCpuOptionsOutputReference | LaunchTemplateCpuOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    core_count: {
      value: cdktf.numberToHclTerraform(struct!.coreCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threads_per_core: {
      value: cdktf.numberToHclTerraform(struct!.threadsPerCore),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LaunchTemplateCpuOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LaunchTemplateCpuOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._coreCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.coreCount = this._coreCount;
    }
    if (this._threadsPerCore !== undefined) {
      hasAnyValues = true;
      internalValueResult.threadsPerCore = this._threadsPerCore;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LaunchTemplateCpuOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._coreCount = undefined;
      this._threadsPerCore = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._coreCount = value.coreCount;
      this._threadsPerCore = value.threadsPerCore;
    }
  }

  // core_count - computed: false, optional: true, required: false
  private _coreCount?: number; 
  public get coreCount() {
    return this.getNumberAttribute('core_count');
  }
  public set coreCount(value: number) {
    this._coreCount = value;
  }
  public resetCoreCount() {
    this._coreCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreCountInput() {
    return this._coreCount;
  }

  // threads_per_core - computed: false, optional: true, required: false
  private _threadsPerCore?: number; 
  public get threadsPerCore() {
    return this.getNumberAttribute('threads_per_core');
  }
  public set threadsPerCore(value: number) {
    this._threadsPerCore = value;
  }
  public resetThreadsPerCore() {
    this._threadsPerCore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threadsPerCoreInput() {
    return this._threadsPerCore;
  }
}
export interface LaunchTemplateCreditSpecification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/launch_template#cpu_credits LaunchTemplate#cpu_credits}
  */
  readonly cpuCredits?: string;
}

export function launchTemplateCreditSpecificationToTerraform(struct?: LaunchTemplateCreditSpecificationOutputReference | LaunchTemplateCreditSpecification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_credits: cdktf.stringToTerraform(struct!.cpuCredits),
  }
}


export function launchTemplateCreditSpecificationToHclTerraform(struct?: LaunchTemplateCreditSpecificationOutputReference | LaunchTemplateCreditSpecification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu_credits: {
      value: cdktf.stringToHclTerraform(struct!.cpuCredits),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LaunchTemplateCreditSpecificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LaunchTemplateCreditSpecification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuCredits !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuCredits = this._cpuCredits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LaunchTemplateCreditSpecification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpuCredits = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpuCredits = value.cpuCredits;
    }
  }

  // cpu_credits - computed: false, optional: true, required: false
  private _cpuCredits?: string; 
  public get cpuCredits() {
    return this.getStringAttribute('cpu_credits');
  }
  public set cpuCredits(value: string) {
    this._cpuCredits = value;
  }
  public resetCpuCredits() {
    this._cpuCredits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuCreditsInput() {
    return this._cpuCredits;
  }
}
export interface LaunchTemplateElasticGpuSpecifications {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/launch_template#type LaunchTemplate#type}
  */
  readonly type: string;
}

export function launchTemplateElasticGpuSpecificationsToTerraform(struct?: LaunchTemplateElasticGpuSpecifications | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function launchTemplateElasticGpuSpecificationsToHclTerraform(struct?: LaunchTemplateElasticGpuSpecifications | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class LaunchTemplateElasticGpuSpecificationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LaunchTemplateElasticGpuSpecifications | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LaunchTemplateElasticGpuSpecifications | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
    }
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

export class LaunchTemplateElasticGpuSpecificationsList extends cdktf.ComplexList {
  public internalValue? : LaunchTemplateElasticGpuSpecifications[] | cdktf.IResolvable

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
  public get(index: number): LaunchTemplateElasticGpuSpecificationsOutputReference {
    return new LaunchTemplateElasticGpuSpecificationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LaunchTemplateElasticInferenceAccelerator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/launch_template#type LaunchTemplate#type}
  */
  readonly type: string;
}

export function launchTemplateElasticInferenceAcceleratorToTerraform(struct?: LaunchTemplateElasticInferenceAcceleratorOutputReference | LaunchTemplateElasticInferenceAccelerator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function launchTemplateElasticInferenceAcceleratorToHclTerraform(struct?: LaunchTemplateElasticInferenceAcceleratorOutputReference | LaunchTemplateElasticInferenceAccelerator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class LaunchTemplateElasticInferenceAcceleratorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LaunchTemplateElasticInferenceAccelerator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LaunchTemplateElasticInferenceAccelerator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
    }
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
export interface LaunchTemplateEnclaveOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/launch_template#enabled LaunchTemplate#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function launchTemplateEnclaveOptionsToTerraform(struct?: LaunchTemplateEnclaveOptionsOutputReference | LaunchTemplateEnclaveOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function launchTemplateEnclaveOptionsToHclTerraform(struct?: LaunchTemplateEnclaveOptionsOutputReference | LaunchTemplateEnclaveOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LaunchTemplateEnclaveOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LaunchTemplateEnclaveOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LaunchTemplateEnclaveOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface LaunchTemplateHibernationOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/launch_template#configured LaunchTemplate#configured}
  */
  readonly configured: boolean | cdktf.IResolvable;
}

export function launchTemplateHibernationOptionsToTerraform(struct?: LaunchTemplateHibernationOptionsOutputReference | LaunchTemplateHibernationOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configured: cdktf.booleanToTerraform(struct!.configured),
  }
}


export function launchTemplateHibernationOptionsToHclTerraform(struct?: LaunchTemplateHibernationOptionsOutputReference | LaunchTemplateHibernationOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configured: {
      value: cdktf.booleanToHclTerraform(struct!.configured),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LaunchTemplateHibernationOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LaunchTemplateHibernationOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configured !== undefined) {
      hasAnyValues = true;
      internalValueResult.configured = this._configured;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LaunchTemplateHibernationOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._configured = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._configured = value.configured;
    }
  }

  // configured - computed: false, optional: false, required: true
  private _configured?: boolean | cdktf.IResolvable; 
  public get configured() {
    return this.getBooleanAttribute('configured');
  }
  public set configured(value: boolean | cdktf.IResolvable) {
    this._configured = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configuredInput() {
    return this._configured;
  }
}
export interface LaunchTemplateIamInstanceProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/launch_template#arn LaunchTemplate#arn}
  */
  readonly arn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/launch_template#name LaunchTemplate#name}
  */
  readonly name?: string;
}

export function launchTemplateIamInstanceProfileToTerraform(struct?: LaunchTemplateIamInstanceProfileOutputReference | LaunchTemplateIamInstanceProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function launchTemplateIamInstanceProfileToHclTerraform(struct?: LaunchTemplateIamInstanceProfileOutputReference | LaunchTemplateIamInstanceProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    arn: {
      value: cdktf.stringToHclTerraform(struct!.arn),
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

export class LaunchTemplateIamInstanceProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LaunchTemplateIamInstanceProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LaunchTemplateIamInstanceProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._arn = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._arn = value.arn;
      this._name = value.name;
    }
  }

  // arn - computed: false, optional: true, required: false
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  public resetArn() {
    this._arn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
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
export interface LaunchTemplateInstanceMarketOptionsSpotOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/launch_template#block_duration_minutes LaunchTemplate#block_duration_minutes}
  */
  readonly blockDurationMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/launch_template#instance_interruption_behavior LaunchTemplate#instance_interruption_behavior}
  */
  readonly instanceInterruptionBehavior?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/launch_template#max_price LaunchTemplate#max_price}
  */
  readonly maxPrice?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/launch_template#spot_instance_type LaunchTemplate#spot_instance_type}
  */
  readonly spotInstanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/launch_template#valid_until LaunchTemplate#valid_until}
  */
  readonly validUntil?: string;
}

export function launchTemplateInstanceMarketOptionsSpotOptionsToTerraform(struct?: LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference | LaunchTemplateInstanceMarketOptionsSpotOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_duration_minutes: cdktf.numberToTerraform(struct!.blockDurationMinutes),
    instance_interruption_behavior: cdktf.stringToTerraform(struct!.instanceInterruptionBehavior),
    max_price: cdktf.stringToTerraform(struct!.maxPrice),
    spot_instance_type: cdktf.stringToTerraform(struct!.spotInstanceType),
    valid_until: cdktf.stringToTerraform(struct!.validUntil),
  }
}


export function launchTemplateInstanceMarketOptionsSpotOptionsToHclTerraform(struct?: LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference | LaunchTemplateInstanceMarketOptionsSpotOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_duration_minutes: {
      value: cdktf.numberToHclTerraform(struct!.blockDurationMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_interruption_behavior: {
      value: cdktf.stringToHclTerraform(struct!.instanceInterruptionBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_price: {
      value: cdktf.stringToHclTerraform(struct!.maxPrice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spot_instance_type: {
      value: cdktf.stringToHclTerraform(struct!.spotInstanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    valid_until: {
      value: cdktf.stringToHclTerraform(struct!.validUntil),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LaunchTemplateInstanceMarketOptionsSpotOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockDurationMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockDurationMinutes = this._blockDurationMinutes;
    }
    if (this._instanceInterruptionBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceInterruptionBehavior = this._instanceInterruptionBehavior;
    }
    if (this._maxPrice !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPrice = this._maxPrice;
    }
    if (this._spotInstanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.spotInstanceType = this._spotInstanceType;
    }
    if (this._validUntil !== undefined) {
      hasAnyValues = true;
      internalValueResult.validUntil = this._validUntil;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LaunchTemplateInstanceMarketOptionsSpotOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blockDurationMinutes = undefined;
      this._instanceInterruptionBehavior = undefined;
      this._maxPrice = undefined;
      this._spotInstanceType = undefined;
      this._validUntil = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blockDurationMinutes = value.blockDurationMinutes;
      this._instanceInterruptionBehavior = value.instanceInterruptionBehavior;
      this._maxPrice = value.maxPrice;
      this._spotInstanceType = value.spotInstanceType;
      this._validUntil = value.validUntil;
    }
  }

  // block_duration_minutes - computed: false, optional: true, required: false
  private _blockDurationMinutes?: number; 
  public get blockDurationMinutes() {
    return this.getNumberAttribute('block_duration_minutes');
  }
  public set blockDurationMinutes(value: number) {
    this._blockDurationMinutes = value;
  }
  public resetBlockDurationMinutes() {
    this._blockDurationMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockDurationMinutesInput() {
    return this._blockDurationMinutes;
  }

  // instance_interruption_behavior - computed: false, optional: true, required: false
  private _instanceInterruptionBehavior?: string; 
  public get instanceInterruptionBehavior() {
    return this.getStringAttribute('instance_interruption_behavior');
  }
  public set instanceInterruptionBehavior(value: string) {
    this._instanceInterruptionBehavior = value;
  }
  public resetInstanceInterruptionBehavior() {
    this._instanceInterruptionBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceInterruptionBehaviorInput() {
    return this._instanceInterruptionBehavior;
  }

  // max_price - computed: false, optional: true, required: false
  private _maxPrice?: string; 
  public get maxPrice() {
    return this.getStringAttribute('max_price');
  }
  public set maxPrice(value: string) {
    this._maxPrice = value;
  }
  public resetMaxPrice() {
    this._maxPrice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPriceInput() {
    return this._maxPrice;
  }

  // spot_instance_type - computed: false, optional: true, required: false
  private _spotInstanceType?: string; 
  public get spotInstanceType() {
    return this.getStringAttribute('spot_instance_type');
  }
  public set spotInstanceType(value: string) {
    this._spotInstanceType = value;
  }
  public resetSpotInstanceType() {
    this._spotInstanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotInstanceTypeInput() {
    return this._spotInstanceType;
  }

  // valid_until - computed: true, optional: true, required: false
  private _validUntil?: string; 
  public get validUntil() {
    return this.getStringAttribute('valid_until');
  }
  public set validUntil(value: string) {
    this._validUntil = value;
  }
  public resetValidUntil() {
    this._validUntil = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validUntilInput() {
    return this._validUntil;
  }
}
export interface LaunchTemplateInstanceMarketOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/launch_template#market_type LaunchTemplate#market_type}
  */
  readonly marketType?: string;
  /**
  * spot_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/launch_template#spot_options LaunchTemplate#spot_options}
  */
  readonly spotOptions?: LaunchTemplateInstanceMarketOptionsSpotOptions;
}

export function launchTemplateInstanceMarketOptionsToTerraform(struct?: LaunchTemplateInstanceMarketOptionsOutputReference | LaunchTemplateInstanceMarketOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    market_type: cdktf.stringToTerraform(struct!.marketType),
    spot_options: launchTemplateInstanceMarketOptionsSpotOptionsToTerraform(struct!.spotOptions),
  }
}


export function launchTemplateInstanceMarketOptionsToHclTerraform(struct?: LaunchTemplateInstanceMarketOptionsOutputReference | LaunchTemplateInstanceMarketOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    market_type: {
      value: cdktf.stringToHclTerraform(struct!.marketType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spot_options: {
      value: launchTemplateInstanceMarketOptionsSpotOptionsToHclTerraform(struct!.spotOptions),
      isBlock: true,
      type: "list",
      storageClassType: "LaunchTemplateInstanceMarketOptionsSpotOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LaunchTemplateInstanceMarketOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LaunchTemplateInstanceMarketOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._marketType !== undefined) {
      hasAnyValues = true;
      internalValueResult.marketType = this._marketType;
    }
    if (this._spotOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spotOptions = this._spotOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LaunchTemplateInstanceMarketOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._marketType = undefined;
      this._spotOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._marketType = value.marketType;
      this._spotOptions.internalValue = value.spotOptions;
    }
  }

  // market_type - computed: false, optional: true, required: false
  private _marketType?: string; 
  public get marketType() {
    return this.getStringAttribute('market_type');
  }
  public set marketType(value: string) {
    this._marketType = value;
  }
  public resetMarketType() {
    this._marketType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get marketTypeInput() {
    return this._marketType;
  }

  // spot_options - computed: false, optional: true, required: false
  private _spotOptions = new LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference(this, "spot_options");
  public get spotOptions() {
    return this._spotOptions;
  }
  public putSpotOptions(value: LaunchTemplateInstanceMarketOptionsSpotOptions) {
    this._spotOptions.internalValue = value;
  }
  public resetSpotOptions() {
    this._spotOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotOptionsInput() {
    return this._spotOptions.internalValue;
  }
}
export interface LaunchTemplateLicenseSpecification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/launch_template#license_configuration_arn LaunchTemplate#license_configuration_arn}
  */
  readonly licenseConfigurationArn: string;
}

export function launchTemplateLicenseSpecificationToTerraform(struct?: LaunchTemplateLicenseSpecification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    license_configuration_arn: cdktf.stringToTerraform(struct!.licenseConfigurationArn),
  }
}


export function launchTemplateLicenseSpecificationToHclTerraform(struct?: LaunchTemplateLicenseSpecification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    license_configuration_arn: {
      value: cdktf.stringToHclTerraform(struct!.licenseConfigurationArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LaunchTemplateLicenseSpecificationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LaunchTemplateLicenseSpecification | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._licenseConfigurationArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.licenseConfigurationArn = this._licenseConfigurationArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LaunchTemplateLicenseSpecification | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._licenseConfigurationArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._licenseConfigurationArn = value.licenseConfigurationArn;
    }
  }

  // license_configuration_arn - computed: false, optional: false, required: true
  private _licenseConfigurationArn?: string; 
  public get licenseConfigurationArn() {
    return this.getStringAttribute('license_configuration_arn');
  }
  public set licenseConfigurationArn(value: string) {
    this._licenseConfigurationArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseConfigurationArnInput() {
    return this._licenseConfigurationArn;
  }
}

export class LaunchTemplateLicenseSpecificationList extends cdktf.ComplexList {
  public internalValue? : LaunchTemplateLicenseSpecification[] | cdktf.IResolvable

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
  public get(index: number): LaunchTemplateLicenseSpecificationOutputReference {
    return new LaunchTemplateLicenseSpecificationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LaunchTemplateMetadataOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/launch_template#http_endpoint LaunchTemplate#http_endpoint}
  */
  readonly httpEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/launch_template#http_put_response_hop_limit LaunchTemplate#http_put_response_hop_limit}
  */
  readonly httpPutResponseHopLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/launch_template#http_tokens LaunchTemplate#http_tokens}
  */
  readonly httpTokens?: string;
}

export function launchTemplateMetadataOptionsToTerraform(struct?: LaunchTemplateMetadataOptionsOutputReference | LaunchTemplateMetadataOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_endpoint: cdktf.stringToTerraform(struct!.httpEndpoint),
    http_put_response_hop_limit: cdktf.numberToTerraform(struct!.httpPutResponseHopLimit),
    http_tokens: cdktf.stringToTerraform(struct!.httpTokens),
  }
}


export function launchTemplateMetadataOptionsToHclTerraform(struct?: LaunchTemplateMetadataOptionsOutputReference | LaunchTemplateMetadataOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.httpEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_put_response_hop_limit: {
      value: cdktf.numberToHclTerraform(struct!.httpPutResponseHopLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_tokens: {
      value: cdktf.stringToHclTerraform(struct!.httpTokens),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LaunchTemplateMetadataOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LaunchTemplateMetadataOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpEndpoint = this._httpEndpoint;
    }
    if (this._httpPutResponseHopLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpPutResponseHopLimit = this._httpPutResponseHopLimit;
    }
    if (this._httpTokens !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpTokens = this._httpTokens;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LaunchTemplateMetadataOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._httpEndpoint = undefined;
      this._httpPutResponseHopLimit = undefined;
      this._httpTokens = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._httpEndpoint = value.httpEndpoint;
      this._httpPutResponseHopLimit = value.httpPutResponseHopLimit;
      this._httpTokens = value.httpTokens;
    }
  }

  // http_endpoint - computed: true, optional: true, required: false
  private _httpEndpoint?: string; 
  public get httpEndpoint() {
    return this.getStringAttribute('http_endpoint');
  }
  public set httpEndpoint(value: string) {
    this._httpEndpoint = value;
  }
  public resetHttpEndpoint() {
    this._httpEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpEndpointInput() {
    return this._httpEndpoint;
  }

  // http_put_response_hop_limit - computed: true, optional: true, required: false
  private _httpPutResponseHopLimit?: number; 
  public get httpPutResponseHopLimit() {
    return this.getNumberAttribute('http_put_response_hop_limit');
  }
  public set httpPutResponseHopLimit(value: number) {
    this._httpPutResponseHopLimit = value;
  }
  public resetHttpPutResponseHopLimit() {
    this._httpPutResponseHopLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpPutResponseHopLimitInput() {
    return this._httpPutResponseHopLimit;
  }

  // http_tokens - computed: true, optional: true, required: false
  private _httpTokens?: string; 
  public get httpTokens() {
    return this.getStringAttribute('http_tokens');
  }
  public set httpTokens(value: string) {
    this._httpTokens = value;
  }
  public resetHttpTokens() {
    this._httpTokens = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpTokensInput() {
    return this._httpTokens;
  }
}
export interface LaunchTemplateMonitoring {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/launch_template#enabled LaunchTemplate#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function launchTemplateMonitoringToTerraform(struct?: LaunchTemplateMonitoringOutputReference | LaunchTemplateMonitoring): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function launchTemplateMonitoringToHclTerraform(struct?: LaunchTemplateMonitoringOutputReference | LaunchTemplateMonitoring): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LaunchTemplateMonitoringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LaunchTemplateMonitoring | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LaunchTemplateMonitoring | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface LaunchTemplateNetworkInterfaces {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/launch_template#associate_carrier_ip_address LaunchTemplate#associate_carrier_ip_address}
  */
  readonly associateCarrierIpAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/launch_template#associate_public_ip_address LaunchTemplate#associate_public_ip_address}
  */
  readonly associatePublicIpAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/launch_template#delete_on_termination LaunchTemplate#delete_on_termination}
  */
  readonly deleteOnTermination?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/launch_template#description LaunchTemplate#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/launch_template#device_index LaunchTemplate#device_index}
  */
  readonly deviceIndex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/launch_template#ipv4_address_count LaunchTemplate#ipv4_address_count}
  */
  readonly ipv4AddressCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/launch_template#ipv4_addresses LaunchTemplate#ipv4_addresses}
  */
  readonly ipv4Addresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/launch_template#ipv6_address_count LaunchTemplate#ipv6_address_count}
  */
  readonly ipv6AddressCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/launch_template#ipv6_addresses LaunchTemplate#ipv6_addresses}
  */
  readonly ipv6Addresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/launch_template#network_interface_id LaunchTemplate#network_interface_id}
  */
  readonly networkInterfaceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/launch_template#private_ip_address LaunchTemplate#private_ip_address}
  */
  readonly privateIpAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/launch_template#security_groups LaunchTemplate#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/launch_template#subnet_id LaunchTemplate#subnet_id}
  */
  readonly subnetId?: string;
}

export function launchTemplateNetworkInterfacesToTerraform(struct?: LaunchTemplateNetworkInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    associate_carrier_ip_address: cdktf.stringToTerraform(struct!.associateCarrierIpAddress),
    associate_public_ip_address: cdktf.stringToTerraform(struct!.associatePublicIpAddress),
    delete_on_termination: cdktf.stringToTerraform(struct!.deleteOnTermination),
    description: cdktf.stringToTerraform(struct!.description),
    device_index: cdktf.numberToTerraform(struct!.deviceIndex),
    ipv4_address_count: cdktf.numberToTerraform(struct!.ipv4AddressCount),
    ipv4_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipv4Addresses),
    ipv6_address_count: cdktf.numberToTerraform(struct!.ipv6AddressCount),
    ipv6_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipv6Addresses),
    network_interface_id: cdktf.stringToTerraform(struct!.networkInterfaceId),
    private_ip_address: cdktf.stringToTerraform(struct!.privateIpAddress),
    security_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroups),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}


export function launchTemplateNetworkInterfacesToHclTerraform(struct?: LaunchTemplateNetworkInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    associate_carrier_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.associateCarrierIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    associate_public_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.associatePublicIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete_on_termination: {
      value: cdktf.stringToHclTerraform(struct!.deleteOnTermination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_index: {
      value: cdktf.numberToHclTerraform(struct!.deviceIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_address_count: {
      value: cdktf.numberToHclTerraform(struct!.ipv4AddressCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipv4Addresses),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    ipv6_address_count: {
      value: cdktf.numberToHclTerraform(struct!.ipv6AddressCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipv6Addresses),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    network_interface_id: {
      value: cdktf.stringToHclTerraform(struct!.networkInterfaceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.privateIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroups),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LaunchTemplateNetworkInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LaunchTemplateNetworkInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._associateCarrierIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.associateCarrierIpAddress = this._associateCarrierIpAddress;
    }
    if (this._associatePublicIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.associatePublicIpAddress = this._associatePublicIpAddress;
    }
    if (this._deleteOnTermination !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteOnTermination = this._deleteOnTermination;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._deviceIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceIndex = this._deviceIndex;
    }
    if (this._ipv4AddressCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4AddressCount = this._ipv4AddressCount;
    }
    if (this._ipv4Addresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Addresses = this._ipv4Addresses;
    }
    if (this._ipv6AddressCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6AddressCount = this._ipv6AddressCount;
    }
    if (this._ipv6Addresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Addresses = this._ipv6Addresses;
    }
    if (this._networkInterfaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkInterfaceId = this._networkInterfaceId;
    }
    if (this._privateIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateIpAddress = this._privateIpAddress;
    }
    if (this._securityGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroups = this._securityGroups;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LaunchTemplateNetworkInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._associateCarrierIpAddress = undefined;
      this._associatePublicIpAddress = undefined;
      this._deleteOnTermination = undefined;
      this._description = undefined;
      this._deviceIndex = undefined;
      this._ipv4AddressCount = undefined;
      this._ipv4Addresses = undefined;
      this._ipv6AddressCount = undefined;
      this._ipv6Addresses = undefined;
      this._networkInterfaceId = undefined;
      this._privateIpAddress = undefined;
      this._securityGroups = undefined;
      this._subnetId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._associateCarrierIpAddress = value.associateCarrierIpAddress;
      this._associatePublicIpAddress = value.associatePublicIpAddress;
      this._deleteOnTermination = value.deleteOnTermination;
      this._description = value.description;
      this._deviceIndex = value.deviceIndex;
      this._ipv4AddressCount = value.ipv4AddressCount;
      this._ipv4Addresses = value.ipv4Addresses;
      this._ipv6AddressCount = value.ipv6AddressCount;
      this._ipv6Addresses = value.ipv6Addresses;
      this._networkInterfaceId = value.networkInterfaceId;
      this._privateIpAddress = value.privateIpAddress;
      this._securityGroups = value.securityGroups;
      this._subnetId = value.subnetId;
    }
  }

  // associate_carrier_ip_address - computed: false, optional: true, required: false
  private _associateCarrierIpAddress?: string; 
  public get associateCarrierIpAddress() {
    return this.getStringAttribute('associate_carrier_ip_address');
  }
  public set associateCarrierIpAddress(value: string) {
    this._associateCarrierIpAddress = value;
  }
  public resetAssociateCarrierIpAddress() {
    this._associateCarrierIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associateCarrierIpAddressInput() {
    return this._associateCarrierIpAddress;
  }

  // associate_public_ip_address - computed: false, optional: true, required: false
  private _associatePublicIpAddress?: string; 
  public get associatePublicIpAddress() {
    return this.getStringAttribute('associate_public_ip_address');
  }
  public set associatePublicIpAddress(value: string) {
    this._associatePublicIpAddress = value;
  }
  public resetAssociatePublicIpAddress() {
    this._associatePublicIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associatePublicIpAddressInput() {
    return this._associatePublicIpAddress;
  }

  // delete_on_termination - computed: false, optional: true, required: false
  private _deleteOnTermination?: string; 
  public get deleteOnTermination() {
    return this.getStringAttribute('delete_on_termination');
  }
  public set deleteOnTermination(value: string) {
    this._deleteOnTermination = value;
  }
  public resetDeleteOnTermination() {
    this._deleteOnTermination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteOnTerminationInput() {
    return this._deleteOnTermination;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // device_index - computed: false, optional: true, required: false
  private _deviceIndex?: number; 
  public get deviceIndex() {
    return this.getNumberAttribute('device_index');
  }
  public set deviceIndex(value: number) {
    this._deviceIndex = value;
  }
  public resetDeviceIndex() {
    this._deviceIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIndexInput() {
    return this._deviceIndex;
  }

  // ipv4_address_count - computed: false, optional: true, required: false
  private _ipv4AddressCount?: number; 
  public get ipv4AddressCount() {
    return this.getNumberAttribute('ipv4_address_count');
  }
  public set ipv4AddressCount(value: number) {
    this._ipv4AddressCount = value;
  }
  public resetIpv4AddressCount() {
    this._ipv4AddressCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressCountInput() {
    return this._ipv4AddressCount;
  }

  // ipv4_addresses - computed: false, optional: true, required: false
  private _ipv4Addresses?: string[]; 
  public get ipv4Addresses() {
    return cdktf.Fn.tolist(this.getListAttribute('ipv4_addresses'));
  }
  public set ipv4Addresses(value: string[]) {
    this._ipv4Addresses = value;
  }
  public resetIpv4Addresses() {
    this._ipv4Addresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressesInput() {
    return this._ipv4Addresses;
  }

  // ipv6_address_count - computed: false, optional: true, required: false
  private _ipv6AddressCount?: number; 
  public get ipv6AddressCount() {
    return this.getNumberAttribute('ipv6_address_count');
  }
  public set ipv6AddressCount(value: number) {
    this._ipv6AddressCount = value;
  }
  public resetIpv6AddressCount() {
    this._ipv6AddressCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressCountInput() {
    return this._ipv6AddressCount;
  }

  // ipv6_addresses - computed: false, optional: true, required: false
  private _ipv6Addresses?: string[]; 
  public get ipv6Addresses() {
    return cdktf.Fn.tolist(this.getListAttribute('ipv6_addresses'));
  }
  public set ipv6Addresses(value: string[]) {
    this._ipv6Addresses = value;
  }
  public resetIpv6Addresses() {
    this._ipv6Addresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressesInput() {
    return this._ipv6Addresses;
  }

  // network_interface_id - computed: false, optional: true, required: false
  private _networkInterfaceId?: string; 
  public get networkInterfaceId() {
    return this.getStringAttribute('network_interface_id');
  }
  public set networkInterfaceId(value: string) {
    this._networkInterfaceId = value;
  }
  public resetNetworkInterfaceId() {
    this._networkInterfaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceIdInput() {
    return this._networkInterfaceId;
  }

  // private_ip_address - computed: false, optional: true, required: false
  private _privateIpAddress?: string; 
  public get privateIpAddress() {
    return this.getStringAttribute('private_ip_address');
  }
  public set privateIpAddress(value: string) {
    this._privateIpAddress = value;
  }
  public resetPrivateIpAddress() {
    this._privateIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpAddressInput() {
    return this._privateIpAddress;
  }

  // security_groups - computed: false, optional: true, required: false
  private _securityGroups?: string[]; 
  public get securityGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('security_groups'));
  }
  public set securityGroups(value: string[]) {
    this._securityGroups = value;
  }
  public resetSecurityGroups() {
    this._securityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups;
  }

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }
}

export class LaunchTemplateNetworkInterfacesList extends cdktf.ComplexList {
  public internalValue? : LaunchTemplateNetworkInterfaces[] | cdktf.IResolvable

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
  public get(index: number): LaunchTemplateNetworkInterfacesOutputReference {
    return new LaunchTemplateNetworkInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LaunchTemplatePlacement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/launch_template#affinity LaunchTemplate#affinity}
  */
  readonly affinity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/launch_template#availability_zone LaunchTemplate#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/launch_template#group_name LaunchTemplate#group_name}
  */
  readonly groupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/launch_template#host_id LaunchTemplate#host_id}
  */
  readonly hostId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/launch_template#partition_number LaunchTemplate#partition_number}
  */
  readonly partitionNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/launch_template#spread_domain LaunchTemplate#spread_domain}
  */
  readonly spreadDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/launch_template#tenancy LaunchTemplate#tenancy}
  */
  readonly tenancy?: string;
}

export function launchTemplatePlacementToTerraform(struct?: LaunchTemplatePlacementOutputReference | LaunchTemplatePlacement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    affinity: cdktf.stringToTerraform(struct!.affinity),
    availability_zone: cdktf.stringToTerraform(struct!.availabilityZone),
    group_name: cdktf.stringToTerraform(struct!.groupName),
    host_id: cdktf.stringToTerraform(struct!.hostId),
    partition_number: cdktf.numberToTerraform(struct!.partitionNumber),
    spread_domain: cdktf.stringToTerraform(struct!.spreadDomain),
    tenancy: cdktf.stringToTerraform(struct!.tenancy),
  }
}


export function launchTemplatePlacementToHclTerraform(struct?: LaunchTemplatePlacementOutputReference | LaunchTemplatePlacement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    affinity: {
      value: cdktf.stringToHclTerraform(struct!.affinity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    availability_zone: {
      value: cdktf.stringToHclTerraform(struct!.availabilityZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_name: {
      value: cdktf.stringToHclTerraform(struct!.groupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_id: {
      value: cdktf.stringToHclTerraform(struct!.hostId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    partition_number: {
      value: cdktf.numberToHclTerraform(struct!.partitionNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    spread_domain: {
      value: cdktf.stringToHclTerraform(struct!.spreadDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenancy: {
      value: cdktf.stringToHclTerraform(struct!.tenancy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LaunchTemplatePlacementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LaunchTemplatePlacement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._affinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.affinity = this._affinity;
    }
    if (this._availabilityZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityZone = this._availabilityZone;
    }
    if (this._groupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupName = this._groupName;
    }
    if (this._hostId !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostId = this._hostId;
    }
    if (this._partitionNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitionNumber = this._partitionNumber;
    }
    if (this._spreadDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.spreadDomain = this._spreadDomain;
    }
    if (this._tenancy !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenancy = this._tenancy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LaunchTemplatePlacement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._affinity = undefined;
      this._availabilityZone = undefined;
      this._groupName = undefined;
      this._hostId = undefined;
      this._partitionNumber = undefined;
      this._spreadDomain = undefined;
      this._tenancy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._affinity = value.affinity;
      this._availabilityZone = value.availabilityZone;
      this._groupName = value.groupName;
      this._hostId = value.hostId;
      this._partitionNumber = value.partitionNumber;
      this._spreadDomain = value.spreadDomain;
      this._tenancy = value.tenancy;
    }
  }

  // affinity - computed: false, optional: true, required: false
  private _affinity?: string; 
  public get affinity() {
    return this.getStringAttribute('affinity');
  }
  public set affinity(value: string) {
    this._affinity = value;
  }
  public resetAffinity() {
    this._affinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityInput() {
    return this._affinity;
  }

  // availability_zone - computed: false, optional: true, required: false
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  public resetAvailabilityZone() {
    this._availabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // group_name - computed: false, optional: true, required: false
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  public resetGroupName() {
    this._groupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
  }

  // host_id - computed: false, optional: true, required: false
  private _hostId?: string; 
  public get hostId() {
    return this.getStringAttribute('host_id');
  }
  public set hostId(value: string) {
    this._hostId = value;
  }
  public resetHostId() {
    this._hostId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostIdInput() {
    return this._hostId;
  }

  // partition_number - computed: false, optional: true, required: false
  private _partitionNumber?: number; 
  public get partitionNumber() {
    return this.getNumberAttribute('partition_number');
  }
  public set partitionNumber(value: number) {
    this._partitionNumber = value;
  }
  public resetPartitionNumber() {
    this._partitionNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionNumberInput() {
    return this._partitionNumber;
  }

  // spread_domain - computed: false, optional: true, required: false
  private _spreadDomain?: string; 
  public get spreadDomain() {
    return this.getStringAttribute('spread_domain');
  }
  public set spreadDomain(value: string) {
    this._spreadDomain = value;
  }
  public resetSpreadDomain() {
    this._spreadDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spreadDomainInput() {
    return this._spreadDomain;
  }

  // tenancy - computed: false, optional: true, required: false
  private _tenancy?: string; 
  public get tenancy() {
    return this.getStringAttribute('tenancy');
  }
  public set tenancy(value: string) {
    this._tenancy = value;
  }
  public resetTenancy() {
    this._tenancy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenancyInput() {
    return this._tenancy;
  }
}
export interface LaunchTemplateTagSpecifications {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/launch_template#resource_type LaunchTemplate#resource_type}
  */
  readonly resourceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/launch_template#tags LaunchTemplate#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function launchTemplateTagSpecificationsToTerraform(struct?: LaunchTemplateTagSpecifications | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_type: cdktf.stringToTerraform(struct!.resourceType),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
  }
}


export function launchTemplateTagSpecificationsToHclTerraform(struct?: LaunchTemplateTagSpecifications | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource_type: {
      value: cdktf.stringToHclTerraform(struct!.resourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LaunchTemplateTagSpecificationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LaunchTemplateTagSpecifications | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LaunchTemplateTagSpecifications | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceType = undefined;
      this._tags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceType = value.resourceType;
      this._tags = value.tags;
    }
  }

  // resource_type - computed: false, optional: true, required: false
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  public resetResourceType() {
    this._resourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}

export class LaunchTemplateTagSpecificationsList extends cdktf.ComplexList {
  public internalValue? : LaunchTemplateTagSpecifications[] | cdktf.IResolvable

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
  public get(index: number): LaunchTemplateTagSpecificationsOutputReference {
    return new LaunchTemplateTagSpecificationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/launch_template aws_launch_template}
*/
export class LaunchTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_launch_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LaunchTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LaunchTemplate to import
  * @param importFromId The id of the existing LaunchTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/launch_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LaunchTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_launch_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aaronfeng/aws/3.29.6/docs/resources/launch_template aws_launch_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LaunchTemplateConfig = {}
  */
  public constructor(scope: Construct, id: string, config: LaunchTemplateConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_launch_template',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '3.29.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultVersion = config.defaultVersion;
    this._description = config.description;
    this._disableApiTermination = config.disableApiTermination;
    this._ebsOptimized = config.ebsOptimized;
    this._id = config.id;
    this._imageId = config.imageId;
    this._instanceInitiatedShutdownBehavior = config.instanceInitiatedShutdownBehavior;
    this._instanceType = config.instanceType;
    this._kernelId = config.kernelId;
    this._keyName = config.keyName;
    this._name = config.name;
    this._namePrefix = config.namePrefix;
    this._ramDiskId = config.ramDiskId;
    this._securityGroupNames = config.securityGroupNames;
    this._tags = config.tags;
    this._updateDefaultVersion = config.updateDefaultVersion;
    this._userData = config.userData;
    this._vpcSecurityGroupIds = config.vpcSecurityGroupIds;
    this._blockDeviceMappings.internalValue = config.blockDeviceMappings;
    this._capacityReservationSpecification.internalValue = config.capacityReservationSpecification;
    this._cpuOptions.internalValue = config.cpuOptions;
    this._creditSpecification.internalValue = config.creditSpecification;
    this._elasticGpuSpecifications.internalValue = config.elasticGpuSpecifications;
    this._elasticInferenceAccelerator.internalValue = config.elasticInferenceAccelerator;
    this._enclaveOptions.internalValue = config.enclaveOptions;
    this._hibernationOptions.internalValue = config.hibernationOptions;
    this._iamInstanceProfile.internalValue = config.iamInstanceProfile;
    this._instanceMarketOptions.internalValue = config.instanceMarketOptions;
    this._licenseSpecification.internalValue = config.licenseSpecification;
    this._metadataOptions.internalValue = config.metadataOptions;
    this._monitoring.internalValue = config.monitoring;
    this._networkInterfaces.internalValue = config.networkInterfaces;
    this._placement.internalValue = config.placement;
    this._tagSpecifications.internalValue = config.tagSpecifications;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // default_version - computed: true, optional: true, required: false
  private _defaultVersion?: number; 
  public get defaultVersion() {
    return this.getNumberAttribute('default_version');
  }
  public set defaultVersion(value: number) {
    this._defaultVersion = value;
  }
  public resetDefaultVersion() {
    this._defaultVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultVersionInput() {
    return this._defaultVersion;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // disable_api_termination - computed: false, optional: true, required: false
  private _disableApiTermination?: boolean | cdktf.IResolvable; 
  public get disableApiTermination() {
    return this.getBooleanAttribute('disable_api_termination');
  }
  public set disableApiTermination(value: boolean | cdktf.IResolvable) {
    this._disableApiTermination = value;
  }
  public resetDisableApiTermination() {
    this._disableApiTermination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableApiTerminationInput() {
    return this._disableApiTermination;
  }

  // ebs_optimized - computed: false, optional: true, required: false
  private _ebsOptimized?: string; 
  public get ebsOptimized() {
    return this.getStringAttribute('ebs_optimized');
  }
  public set ebsOptimized(value: string) {
    this._ebsOptimized = value;
  }
  public resetEbsOptimized() {
    this._ebsOptimized = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsOptimizedInput() {
    return this._ebsOptimized;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // image_id - computed: false, optional: true, required: false
  private _imageId?: string; 
  public get imageId() {
    return this.getStringAttribute('image_id');
  }
  public set imageId(value: string) {
    this._imageId = value;
  }
  public resetImageId() {
    this._imageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageIdInput() {
    return this._imageId;
  }

  // instance_initiated_shutdown_behavior - computed: false, optional: true, required: false
  private _instanceInitiatedShutdownBehavior?: string; 
  public get instanceInitiatedShutdownBehavior() {
    return this.getStringAttribute('instance_initiated_shutdown_behavior');
  }
  public set instanceInitiatedShutdownBehavior(value: string) {
    this._instanceInitiatedShutdownBehavior = value;
  }
  public resetInstanceInitiatedShutdownBehavior() {
    this._instanceInitiatedShutdownBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceInitiatedShutdownBehaviorInput() {
    return this._instanceInitiatedShutdownBehavior;
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // kernel_id - computed: false, optional: true, required: false
  private _kernelId?: string; 
  public get kernelId() {
    return this.getStringAttribute('kernel_id');
  }
  public set kernelId(value: string) {
    this._kernelId = value;
  }
  public resetKernelId() {
    this._kernelId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kernelIdInput() {
    return this._kernelId;
  }

  // key_name - computed: false, optional: true, required: false
  private _keyName?: string; 
  public get keyName() {
    return this.getStringAttribute('key_name');
  }
  public set keyName(value: string) {
    this._keyName = value;
  }
  public resetKeyName() {
    this._keyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyNameInput() {
    return this._keyName;
  }

  // latest_version - computed: true, optional: false, required: false
  public get latestVersion() {
    return this.getNumberAttribute('latest_version');
  }

  // name - computed: true, optional: true, required: false
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

  // name_prefix - computed: false, optional: true, required: false
  private _namePrefix?: string; 
  public get namePrefix() {
    return this.getStringAttribute('name_prefix');
  }
  public set namePrefix(value: string) {
    this._namePrefix = value;
  }
  public resetNamePrefix() {
    this._namePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namePrefixInput() {
    return this._namePrefix;
  }

  // ram_disk_id - computed: false, optional: true, required: false
  private _ramDiskId?: string; 
  public get ramDiskId() {
    return this.getStringAttribute('ram_disk_id');
  }
  public set ramDiskId(value: string) {
    this._ramDiskId = value;
  }
  public resetRamDiskId() {
    this._ramDiskId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ramDiskIdInput() {
    return this._ramDiskId;
  }

  // security_group_names - computed: false, optional: true, required: false
  private _securityGroupNames?: string[]; 
  public get securityGroupNames() {
    return cdktf.Fn.tolist(this.getListAttribute('security_group_names'));
  }
  public set securityGroupNames(value: string[]) {
    this._securityGroupNames = value;
  }
  public resetSecurityGroupNames() {
    this._securityGroupNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupNamesInput() {
    return this._securityGroupNames;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // update_default_version - computed: false, optional: true, required: false
  private _updateDefaultVersion?: boolean | cdktf.IResolvable; 
  public get updateDefaultVersion() {
    return this.getBooleanAttribute('update_default_version');
  }
  public set updateDefaultVersion(value: boolean | cdktf.IResolvable) {
    this._updateDefaultVersion = value;
  }
  public resetUpdateDefaultVersion() {
    this._updateDefaultVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateDefaultVersionInput() {
    return this._updateDefaultVersion;
  }

  // user_data - computed: false, optional: true, required: false
  private _userData?: string; 
  public get userData() {
    return this.getStringAttribute('user_data');
  }
  public set userData(value: string) {
    this._userData = value;
  }
  public resetUserData() {
    this._userData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDataInput() {
    return this._userData;
  }

  // vpc_security_group_ids - computed: false, optional: true, required: false
  private _vpcSecurityGroupIds?: string[]; 
  public get vpcSecurityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('vpc_security_group_ids'));
  }
  public set vpcSecurityGroupIds(value: string[]) {
    this._vpcSecurityGroupIds = value;
  }
  public resetVpcSecurityGroupIds() {
    this._vpcSecurityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcSecurityGroupIdsInput() {
    return this._vpcSecurityGroupIds;
  }

  // block_device_mappings - computed: false, optional: true, required: false
  private _blockDeviceMappings = new LaunchTemplateBlockDeviceMappingsList(this, "block_device_mappings", false);
  public get blockDeviceMappings() {
    return this._blockDeviceMappings;
  }
  public putBlockDeviceMappings(value: LaunchTemplateBlockDeviceMappings[] | cdktf.IResolvable) {
    this._blockDeviceMappings.internalValue = value;
  }
  public resetBlockDeviceMappings() {
    this._blockDeviceMappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockDeviceMappingsInput() {
    return this._blockDeviceMappings.internalValue;
  }

  // capacity_reservation_specification - computed: false, optional: true, required: false
  private _capacityReservationSpecification = new LaunchTemplateCapacityReservationSpecificationOutputReference(this, "capacity_reservation_specification");
  public get capacityReservationSpecification() {
    return this._capacityReservationSpecification;
  }
  public putCapacityReservationSpecification(value: LaunchTemplateCapacityReservationSpecification) {
    this._capacityReservationSpecification.internalValue = value;
  }
  public resetCapacityReservationSpecification() {
    this._capacityReservationSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityReservationSpecificationInput() {
    return this._capacityReservationSpecification.internalValue;
  }

  // cpu_options - computed: false, optional: true, required: false
  private _cpuOptions = new LaunchTemplateCpuOptionsOutputReference(this, "cpu_options");
  public get cpuOptions() {
    return this._cpuOptions;
  }
  public putCpuOptions(value: LaunchTemplateCpuOptions) {
    this._cpuOptions.internalValue = value;
  }
  public resetCpuOptions() {
    this._cpuOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuOptionsInput() {
    return this._cpuOptions.internalValue;
  }

  // credit_specification - computed: false, optional: true, required: false
  private _creditSpecification = new LaunchTemplateCreditSpecificationOutputReference(this, "credit_specification");
  public get creditSpecification() {
    return this._creditSpecification;
  }
  public putCreditSpecification(value: LaunchTemplateCreditSpecification) {
    this._creditSpecification.internalValue = value;
  }
  public resetCreditSpecification() {
    this._creditSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get creditSpecificationInput() {
    return this._creditSpecification.internalValue;
  }

  // elastic_gpu_specifications - computed: false, optional: true, required: false
  private _elasticGpuSpecifications = new LaunchTemplateElasticGpuSpecificationsList(this, "elastic_gpu_specifications", false);
  public get elasticGpuSpecifications() {
    return this._elasticGpuSpecifications;
  }
  public putElasticGpuSpecifications(value: LaunchTemplateElasticGpuSpecifications[] | cdktf.IResolvable) {
    this._elasticGpuSpecifications.internalValue = value;
  }
  public resetElasticGpuSpecifications() {
    this._elasticGpuSpecifications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticGpuSpecificationsInput() {
    return this._elasticGpuSpecifications.internalValue;
  }

  // elastic_inference_accelerator - computed: false, optional: true, required: false
  private _elasticInferenceAccelerator = new LaunchTemplateElasticInferenceAcceleratorOutputReference(this, "elastic_inference_accelerator");
  public get elasticInferenceAccelerator() {
    return this._elasticInferenceAccelerator;
  }
  public putElasticInferenceAccelerator(value: LaunchTemplateElasticInferenceAccelerator) {
    this._elasticInferenceAccelerator.internalValue = value;
  }
  public resetElasticInferenceAccelerator() {
    this._elasticInferenceAccelerator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticInferenceAcceleratorInput() {
    return this._elasticInferenceAccelerator.internalValue;
  }

  // enclave_options - computed: false, optional: true, required: false
  private _enclaveOptions = new LaunchTemplateEnclaveOptionsOutputReference(this, "enclave_options");
  public get enclaveOptions() {
    return this._enclaveOptions;
  }
  public putEnclaveOptions(value: LaunchTemplateEnclaveOptions) {
    this._enclaveOptions.internalValue = value;
  }
  public resetEnclaveOptions() {
    this._enclaveOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enclaveOptionsInput() {
    return this._enclaveOptions.internalValue;
  }

  // hibernation_options - computed: false, optional: true, required: false
  private _hibernationOptions = new LaunchTemplateHibernationOptionsOutputReference(this, "hibernation_options");
  public get hibernationOptions() {
    return this._hibernationOptions;
  }
  public putHibernationOptions(value: LaunchTemplateHibernationOptions) {
    this._hibernationOptions.internalValue = value;
  }
  public resetHibernationOptions() {
    this._hibernationOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hibernationOptionsInput() {
    return this._hibernationOptions.internalValue;
  }

  // iam_instance_profile - computed: false, optional: true, required: false
  private _iamInstanceProfile = new LaunchTemplateIamInstanceProfileOutputReference(this, "iam_instance_profile");
  public get iamInstanceProfile() {
    return this._iamInstanceProfile;
  }
  public putIamInstanceProfile(value: LaunchTemplateIamInstanceProfile) {
    this._iamInstanceProfile.internalValue = value;
  }
  public resetIamInstanceProfile() {
    this._iamInstanceProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamInstanceProfileInput() {
    return this._iamInstanceProfile.internalValue;
  }

  // instance_market_options - computed: false, optional: true, required: false
  private _instanceMarketOptions = new LaunchTemplateInstanceMarketOptionsOutputReference(this, "instance_market_options");
  public get instanceMarketOptions() {
    return this._instanceMarketOptions;
  }
  public putInstanceMarketOptions(value: LaunchTemplateInstanceMarketOptions) {
    this._instanceMarketOptions.internalValue = value;
  }
  public resetInstanceMarketOptions() {
    this._instanceMarketOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceMarketOptionsInput() {
    return this._instanceMarketOptions.internalValue;
  }

  // license_specification - computed: false, optional: true, required: false
  private _licenseSpecification = new LaunchTemplateLicenseSpecificationList(this, "license_specification", true);
  public get licenseSpecification() {
    return this._licenseSpecification;
  }
  public putLicenseSpecification(value: LaunchTemplateLicenseSpecification[] | cdktf.IResolvable) {
    this._licenseSpecification.internalValue = value;
  }
  public resetLicenseSpecification() {
    this._licenseSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseSpecificationInput() {
    return this._licenseSpecification.internalValue;
  }

  // metadata_options - computed: false, optional: true, required: false
  private _metadataOptions = new LaunchTemplateMetadataOptionsOutputReference(this, "metadata_options");
  public get metadataOptions() {
    return this._metadataOptions;
  }
  public putMetadataOptions(value: LaunchTemplateMetadataOptions) {
    this._metadataOptions.internalValue = value;
  }
  public resetMetadataOptions() {
    this._metadataOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataOptionsInput() {
    return this._metadataOptions.internalValue;
  }

  // monitoring - computed: false, optional: true, required: false
  private _monitoring = new LaunchTemplateMonitoringOutputReference(this, "monitoring");
  public get monitoring() {
    return this._monitoring;
  }
  public putMonitoring(value: LaunchTemplateMonitoring) {
    this._monitoring.internalValue = value;
  }
  public resetMonitoring() {
    this._monitoring.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringInput() {
    return this._monitoring.internalValue;
  }

  // network_interfaces - computed: false, optional: true, required: false
  private _networkInterfaces = new LaunchTemplateNetworkInterfacesList(this, "network_interfaces", false);
  public get networkInterfaces() {
    return this._networkInterfaces;
  }
  public putNetworkInterfaces(value: LaunchTemplateNetworkInterfaces[] | cdktf.IResolvable) {
    this._networkInterfaces.internalValue = value;
  }
  public resetNetworkInterfaces() {
    this._networkInterfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfacesInput() {
    return this._networkInterfaces.internalValue;
  }

  // placement - computed: false, optional: true, required: false
  private _placement = new LaunchTemplatePlacementOutputReference(this, "placement");
  public get placement() {
    return this._placement;
  }
  public putPlacement(value: LaunchTemplatePlacement) {
    this._placement.internalValue = value;
  }
  public resetPlacement() {
    this._placement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementInput() {
    return this._placement.internalValue;
  }

  // tag_specifications - computed: false, optional: true, required: false
  private _tagSpecifications = new LaunchTemplateTagSpecificationsList(this, "tag_specifications", false);
  public get tagSpecifications() {
    return this._tagSpecifications;
  }
  public putTagSpecifications(value: LaunchTemplateTagSpecifications[] | cdktf.IResolvable) {
    this._tagSpecifications.internalValue = value;
  }
  public resetTagSpecifications() {
    this._tagSpecifications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagSpecificationsInput() {
    return this._tagSpecifications.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_version: cdktf.numberToTerraform(this._defaultVersion),
      description: cdktf.stringToTerraform(this._description),
      disable_api_termination: cdktf.booleanToTerraform(this._disableApiTermination),
      ebs_optimized: cdktf.stringToTerraform(this._ebsOptimized),
      id: cdktf.stringToTerraform(this._id),
      image_id: cdktf.stringToTerraform(this._imageId),
      instance_initiated_shutdown_behavior: cdktf.stringToTerraform(this._instanceInitiatedShutdownBehavior),
      instance_type: cdktf.stringToTerraform(this._instanceType),
      kernel_id: cdktf.stringToTerraform(this._kernelId),
      key_name: cdktf.stringToTerraform(this._keyName),
      name: cdktf.stringToTerraform(this._name),
      name_prefix: cdktf.stringToTerraform(this._namePrefix),
      ram_disk_id: cdktf.stringToTerraform(this._ramDiskId),
      security_group_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroupNames),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      update_default_version: cdktf.booleanToTerraform(this._updateDefaultVersion),
      user_data: cdktf.stringToTerraform(this._userData),
      vpc_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vpcSecurityGroupIds),
      block_device_mappings: cdktf.listMapper(launchTemplateBlockDeviceMappingsToTerraform, true)(this._blockDeviceMappings.internalValue),
      capacity_reservation_specification: launchTemplateCapacityReservationSpecificationToTerraform(this._capacityReservationSpecification.internalValue),
      cpu_options: launchTemplateCpuOptionsToTerraform(this._cpuOptions.internalValue),
      credit_specification: launchTemplateCreditSpecificationToTerraform(this._creditSpecification.internalValue),
      elastic_gpu_specifications: cdktf.listMapper(launchTemplateElasticGpuSpecificationsToTerraform, true)(this._elasticGpuSpecifications.internalValue),
      elastic_inference_accelerator: launchTemplateElasticInferenceAcceleratorToTerraform(this._elasticInferenceAccelerator.internalValue),
      enclave_options: launchTemplateEnclaveOptionsToTerraform(this._enclaveOptions.internalValue),
      hibernation_options: launchTemplateHibernationOptionsToTerraform(this._hibernationOptions.internalValue),
      iam_instance_profile: launchTemplateIamInstanceProfileToTerraform(this._iamInstanceProfile.internalValue),
      instance_market_options: launchTemplateInstanceMarketOptionsToTerraform(this._instanceMarketOptions.internalValue),
      license_specification: cdktf.listMapper(launchTemplateLicenseSpecificationToTerraform, true)(this._licenseSpecification.internalValue),
      metadata_options: launchTemplateMetadataOptionsToTerraform(this._metadataOptions.internalValue),
      monitoring: launchTemplateMonitoringToTerraform(this._monitoring.internalValue),
      network_interfaces: cdktf.listMapper(launchTemplateNetworkInterfacesToTerraform, true)(this._networkInterfaces.internalValue),
      placement: launchTemplatePlacementToTerraform(this._placement.internalValue),
      tag_specifications: cdktf.listMapper(launchTemplateTagSpecificationsToTerraform, true)(this._tagSpecifications.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_version: {
        value: cdktf.numberToHclTerraform(this._defaultVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_api_termination: {
        value: cdktf.booleanToHclTerraform(this._disableApiTermination),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ebs_optimized: {
        value: cdktf.stringToHclTerraform(this._ebsOptimized),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image_id: {
        value: cdktf.stringToHclTerraform(this._imageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_initiated_shutdown_behavior: {
        value: cdktf.stringToHclTerraform(this._instanceInitiatedShutdownBehavior),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_type: {
        value: cdktf.stringToHclTerraform(this._instanceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kernel_id: {
        value: cdktf.stringToHclTerraform(this._kernelId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_name: {
        value: cdktf.stringToHclTerraform(this._keyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name_prefix: {
        value: cdktf.stringToHclTerraform(this._namePrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ram_disk_id: {
        value: cdktf.stringToHclTerraform(this._ramDiskId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_group_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityGroupNames),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      update_default_version: {
        value: cdktf.booleanToHclTerraform(this._updateDefaultVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      user_data: {
        value: cdktf.stringToHclTerraform(this._userData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_security_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vpcSecurityGroupIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      block_device_mappings: {
        value: cdktf.listMapperHcl(launchTemplateBlockDeviceMappingsToHclTerraform, true)(this._blockDeviceMappings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LaunchTemplateBlockDeviceMappingsList",
      },
      capacity_reservation_specification: {
        value: launchTemplateCapacityReservationSpecificationToHclTerraform(this._capacityReservationSpecification.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LaunchTemplateCapacityReservationSpecificationList",
      },
      cpu_options: {
        value: launchTemplateCpuOptionsToHclTerraform(this._cpuOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LaunchTemplateCpuOptionsList",
      },
      credit_specification: {
        value: launchTemplateCreditSpecificationToHclTerraform(this._creditSpecification.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LaunchTemplateCreditSpecificationList",
      },
      elastic_gpu_specifications: {
        value: cdktf.listMapperHcl(launchTemplateElasticGpuSpecificationsToHclTerraform, true)(this._elasticGpuSpecifications.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LaunchTemplateElasticGpuSpecificationsList",
      },
      elastic_inference_accelerator: {
        value: launchTemplateElasticInferenceAcceleratorToHclTerraform(this._elasticInferenceAccelerator.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LaunchTemplateElasticInferenceAcceleratorList",
      },
      enclave_options: {
        value: launchTemplateEnclaveOptionsToHclTerraform(this._enclaveOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LaunchTemplateEnclaveOptionsList",
      },
      hibernation_options: {
        value: launchTemplateHibernationOptionsToHclTerraform(this._hibernationOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LaunchTemplateHibernationOptionsList",
      },
      iam_instance_profile: {
        value: launchTemplateIamInstanceProfileToHclTerraform(this._iamInstanceProfile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LaunchTemplateIamInstanceProfileList",
      },
      instance_market_options: {
        value: launchTemplateInstanceMarketOptionsToHclTerraform(this._instanceMarketOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LaunchTemplateInstanceMarketOptionsList",
      },
      license_specification: {
        value: cdktf.listMapperHcl(launchTemplateLicenseSpecificationToHclTerraform, true)(this._licenseSpecification.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LaunchTemplateLicenseSpecificationList",
      },
      metadata_options: {
        value: launchTemplateMetadataOptionsToHclTerraform(this._metadataOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LaunchTemplateMetadataOptionsList",
      },
      monitoring: {
        value: launchTemplateMonitoringToHclTerraform(this._monitoring.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LaunchTemplateMonitoringList",
      },
      network_interfaces: {
        value: cdktf.listMapperHcl(launchTemplateNetworkInterfacesToHclTerraform, true)(this._networkInterfaces.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LaunchTemplateNetworkInterfacesList",
      },
      placement: {
        value: launchTemplatePlacementToHclTerraform(this._placement.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LaunchTemplatePlacementList",
      },
      tag_specifications: {
        value: cdktf.listMapperHcl(launchTemplateTagSpecificationsToHclTerraform, true)(this._tagSpecifications.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LaunchTemplateTagSpecificationsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
