// https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/mlplatform_jupyterhub
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MlplatformJupyterhubConfig extends cdktf.TerraformMetaArguments {
  /**
  * JupyterHub admin name. Changing this creates a new resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/mlplatform_jupyterhub#admin_name MlplatformJupyterhub#admin_name}
  */
  readonly adminName?: string;
  /**
  * JupyterHub admin password. Changing this creates a new resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/mlplatform_jupyterhub#admin_password MlplatformJupyterhub#admin_password}
  */
  readonly adminPassword?: string;
  /**
  * The availability zone in which to create the resource. Changing this creates a new resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/mlplatform_jupyterhub#availability_zone MlplatformJupyterhub#availability_zone}
  */
  readonly availabilityZone: string;
  /**
  * Instance's boot volume configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/mlplatform_jupyterhub#boot_volume MlplatformJupyterhub#boot_volume}
  */
  readonly bootVolume: MlplatformJupyterhubBootVolume;
  /**
  * Instance's data volumes configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/mlplatform_jupyterhub#data_volumes MlplatformJupyterhub#data_volumes}
  */
  readonly dataVolumes: MlplatformJupyterhubDataVolumes[] | cdktf.IResolvable;
  /**
  * Domain name. Changing this creates a new resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/mlplatform_jupyterhub#domain_name MlplatformJupyterhub#domain_name}
  */
  readonly domainName?: string;
  /**
  * Flavor ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/mlplatform_jupyterhub#flavor_id MlplatformJupyterhub#flavor_id}
  */
  readonly flavorId: string;
  /**
  * Instance name. Changing this creates a new resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/mlplatform_jupyterhub#name MlplatformJupyterhub#name}
  */
  readonly name: string;
  /**
  * Network configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/mlplatform_jupyterhub#networks MlplatformJupyterhub#networks}
  */
  readonly networks: MlplatformJupyterhubNetworks[] | cdktf.IResolvable;
  /**
  * The `region` in which ML Platform client is obtained, defaults to the provider's `region`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/mlplatform_jupyterhub#region MlplatformJupyterhub#region}
  */
  readonly region?: string;
  /**
  * Connect specified s3 bucket to instance as volume. Changing this creates a new resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/mlplatform_jupyterhub#s3fs_bucket MlplatformJupyterhub#s3fs_bucket}
  */
  readonly s3FsBucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/mlplatform_jupyterhub#timeouts MlplatformJupyterhub#timeouts}
  */
  readonly timeouts?: MlplatformJupyterhubTimeouts;
}
export interface MlplatformJupyterhubBootVolume {
  /**
  * Size of the volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/mlplatform_jupyterhub#size MlplatformJupyterhub#size}
  */
  readonly size?: number;
  /**
  * Type of the volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/mlplatform_jupyterhub#volume_type MlplatformJupyterhub#volume_type}
  */
  readonly volumeType: string;
}

export function mlplatformJupyterhubBootVolumeToTerraform(struct?: MlplatformJupyterhubBootVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    size: cdktf.numberToTerraform(struct!.size),
    volume_type: cdktf.stringToTerraform(struct!.volumeType),
  }
}


export function mlplatformJupyterhubBootVolumeToHclTerraform(struct?: MlplatformJupyterhubBootVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
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

export class MlplatformJupyterhubBootVolumeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MlplatformJupyterhubBootVolume | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._volumeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeType = this._volumeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MlplatformJupyterhubBootVolume | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._size = undefined;
      this._volumeType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._size = value.size;
      this._volumeType = value.volumeType;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // size - computed: true, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // volume_id - computed: true, optional: false, required: false
  public get volumeId() {
    return this.getStringAttribute('volume_id');
  }

  // volume_type - computed: false, optional: false, required: true
  private _volumeType?: string; 
  public get volumeType() {
    return this.getStringAttribute('volume_type');
  }
  public set volumeType(value: string) {
    this._volumeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeTypeInput() {
    return this._volumeType;
  }
}
export interface MlplatformJupyterhubDataVolumes {
  /**
  * Size of the volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/mlplatform_jupyterhub#size MlplatformJupyterhub#size}
  */
  readonly size: number;
  /**
  * Type of the volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/mlplatform_jupyterhub#volume_type MlplatformJupyterhub#volume_type}
  */
  readonly volumeType: string;
}

export function mlplatformJupyterhubDataVolumesToTerraform(struct?: MlplatformJupyterhubDataVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    size: cdktf.numberToTerraform(struct!.size),
    volume_type: cdktf.stringToTerraform(struct!.volumeType),
  }
}


export function mlplatformJupyterhubDataVolumesToHclTerraform(struct?: MlplatformJupyterhubDataVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
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

export class MlplatformJupyterhubDataVolumesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MlplatformJupyterhubDataVolumes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._volumeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeType = this._volumeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MlplatformJupyterhubDataVolumes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._size = undefined;
      this._volumeType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._size = value.size;
      this._volumeType = value.volumeType;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // size - computed: false, optional: false, required: true
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // volume_id - computed: true, optional: false, required: false
  public get volumeId() {
    return this.getStringAttribute('volume_id');
  }

  // volume_type - computed: false, optional: false, required: true
  private _volumeType?: string; 
  public get volumeType() {
    return this.getStringAttribute('volume_type');
  }
  public set volumeType(value: string) {
    this._volumeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeTypeInput() {
    return this._volumeType;
  }
}

export class MlplatformJupyterhubDataVolumesList extends cdktf.ComplexList {
  public internalValue? : MlplatformJupyterhubDataVolumes[] | cdktf.IResolvable

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
  public get(index: number): MlplatformJupyterhubDataVolumesOutputReference {
    return new MlplatformJupyterhubDataVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MlplatformJupyterhubNetworks {
  /**
  * ID of the ip pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/mlplatform_jupyterhub#ip_pool MlplatformJupyterhub#ip_pool}
  */
  readonly ipPool?: string;
  /**
  * ID of the network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/mlplatform_jupyterhub#network_id MlplatformJupyterhub#network_id}
  */
  readonly networkId: string;
}

export function mlplatformJupyterhubNetworksToTerraform(struct?: MlplatformJupyterhubNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_pool: cdktf.stringToTerraform(struct!.ipPool),
    network_id: cdktf.stringToTerraform(struct!.networkId),
  }
}


export function mlplatformJupyterhubNetworksToHclTerraform(struct?: MlplatformJupyterhubNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_pool: {
      value: cdktf.stringToHclTerraform(struct!.ipPool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_id: {
      value: cdktf.stringToHclTerraform(struct!.networkId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MlplatformJupyterhubNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MlplatformJupyterhubNetworks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipPool = this._ipPool;
    }
    if (this._networkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkId = this._networkId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MlplatformJupyterhubNetworks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipPool = undefined;
      this._networkId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipPool = value.ipPool;
      this._networkId = value.networkId;
    }
  }

  // ip_pool - computed: false, optional: true, required: false
  private _ipPool?: string; 
  public get ipPool() {
    return this.getStringAttribute('ip_pool');
  }
  public set ipPool(value: string) {
    this._ipPool = value;
  }
  public resetIpPool() {
    this._ipPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPoolInput() {
    return this._ipPool;
  }

  // network_id - computed: false, optional: false, required: true
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }
}

export class MlplatformJupyterhubNetworksList extends cdktf.ComplexList {
  public internalValue? : MlplatformJupyterhubNetworks[] | cdktf.IResolvable

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
  public get(index: number): MlplatformJupyterhubNetworksOutputReference {
    return new MlplatformJupyterhubNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MlplatformJupyterhubTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/mlplatform_jupyterhub#create MlplatformJupyterhub#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/mlplatform_jupyterhub#delete MlplatformJupyterhub#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/mlplatform_jupyterhub#update MlplatformJupyterhub#update}
  */
  readonly update?: string;
}

export function mlplatformJupyterhubTimeoutsToTerraform(struct?: MlplatformJupyterhubTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function mlplatformJupyterhubTimeoutsToHclTerraform(struct?: MlplatformJupyterhubTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MlplatformJupyterhubTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MlplatformJupyterhubTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MlplatformJupyterhubTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/mlplatform_jupyterhub vkcs_mlplatform_jupyterhub}
*/
export class MlplatformJupyterhub extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vkcs_mlplatform_jupyterhub";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MlplatformJupyterhub resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MlplatformJupyterhub to import
  * @param importFromId The id of the existing MlplatformJupyterhub that should be imported. Refer to the {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/mlplatform_jupyterhub#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MlplatformJupyterhub to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vkcs_mlplatform_jupyterhub", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/mlplatform_jupyterhub vkcs_mlplatform_jupyterhub} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MlplatformJupyterhubConfig
  */
  public constructor(scope: Construct, id: string, config: MlplatformJupyterhubConfig) {
    super(scope, id, {
      terraformResourceType: 'vkcs_mlplatform_jupyterhub',
      terraformGeneratorMetadata: {
        providerName: 'vkcs',
        providerVersion: '0.13.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adminName = config.adminName;
    this._adminPassword = config.adminPassword;
    this._availabilityZone = config.availabilityZone;
    this._bootVolume.internalValue = config.bootVolume;
    this._dataVolumes.internalValue = config.dataVolumes;
    this._domainName = config.domainName;
    this._flavorId = config.flavorId;
    this._name = config.name;
    this._networks.internalValue = config.networks;
    this._region = config.region;
    this._s3FsBucket = config.s3FsBucket;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_name - computed: false, optional: true, required: false
  private _adminName?: string; 
  public get adminName() {
    return this.getStringAttribute('admin_name');
  }
  public set adminName(value: string) {
    this._adminName = value;
  }
  public resetAdminName() {
    this._adminName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminNameInput() {
    return this._adminName;
  }

  // admin_password - computed: false, optional: true, required: false
  private _adminPassword?: string; 
  public get adminPassword() {
    return this.getStringAttribute('admin_password');
  }
  public set adminPassword(value: string) {
    this._adminPassword = value;
  }
  public resetAdminPassword() {
    this._adminPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPasswordInput() {
    return this._adminPassword;
  }

  // availability_zone - computed: false, optional: false, required: true
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // boot_volume - computed: false, optional: false, required: true
  private _bootVolume = new MlplatformJupyterhubBootVolumeOutputReference(this, "boot_volume");
  public get bootVolume() {
    return this._bootVolume;
  }
  public putBootVolume(value: MlplatformJupyterhubBootVolume) {
    this._bootVolume.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bootVolumeInput() {
    return this._bootVolume.internalValue;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // data_volumes - computed: false, optional: false, required: true
  private _dataVolumes = new MlplatformJupyterhubDataVolumesList(this, "data_volumes", false);
  public get dataVolumes() {
    return this._dataVolumes;
  }
  public putDataVolumes(value: MlplatformJupyterhubDataVolumes[] | cdktf.IResolvable) {
    this._dataVolumes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataVolumesInput() {
    return this._dataVolumes.internalValue;
  }

  // dns_name - computed: true, optional: false, required: false
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }

  // domain_name - computed: false, optional: true, required: false
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  public resetDomainName() {
    this._domainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // flavor_id - computed: false, optional: false, required: true
  private _flavorId?: string; 
  public get flavorId() {
    return this.getStringAttribute('flavor_id');
  }
  public set flavorId(value: string) {
    this._flavorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flavorIdInput() {
    return this._flavorId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // networks - computed: false, optional: false, required: true
  private _networks = new MlplatformJupyterhubNetworksList(this, "networks", false);
  public get networks() {
    return this._networks;
  }
  public putNetworks(value: MlplatformJupyterhubNetworks[] | cdktf.IResolvable) {
    this._networks.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networksInput() {
    return this._networks.internalValue;
  }

  // private_ip - computed: true, optional: false, required: false
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // s3fs_bucket - computed: false, optional: true, required: false
  private _s3FsBucket?: string; 
  public get s3FsBucket() {
    return this.getStringAttribute('s3fs_bucket');
  }
  public set s3FsBucket(value: string) {
    this._s3FsBucket = value;
  }
  public resetS3FsBucket() {
    this._s3FsBucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3FsBucketInput() {
    return this._s3FsBucket;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MlplatformJupyterhubTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MlplatformJupyterhubTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_name: cdktf.stringToTerraform(this._adminName),
      admin_password: cdktf.stringToTerraform(this._adminPassword),
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      boot_volume: mlplatformJupyterhubBootVolumeToTerraform(this._bootVolume.internalValue),
      data_volumes: cdktf.listMapper(mlplatformJupyterhubDataVolumesToTerraform, false)(this._dataVolumes.internalValue),
      domain_name: cdktf.stringToTerraform(this._domainName),
      flavor_id: cdktf.stringToTerraform(this._flavorId),
      name: cdktf.stringToTerraform(this._name),
      networks: cdktf.listMapper(mlplatformJupyterhubNetworksToTerraform, false)(this._networks.internalValue),
      region: cdktf.stringToTerraform(this._region),
      s3fs_bucket: cdktf.stringToTerraform(this._s3FsBucket),
      timeouts: mlplatformJupyterhubTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_name: {
        value: cdktf.stringToHclTerraform(this._adminName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      admin_password: {
        value: cdktf.stringToHclTerraform(this._adminPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      availability_zone: {
        value: cdktf.stringToHclTerraform(this._availabilityZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      boot_volume: {
        value: mlplatformJupyterhubBootVolumeToHclTerraform(this._bootVolume.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MlplatformJupyterhubBootVolume",
      },
      data_volumes: {
        value: cdktf.listMapperHcl(mlplatformJupyterhubDataVolumesToHclTerraform, false)(this._dataVolumes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MlplatformJupyterhubDataVolumesList",
      },
      domain_name: {
        value: cdktf.stringToHclTerraform(this._domainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flavor_id: {
        value: cdktf.stringToHclTerraform(this._flavorId),
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
      networks: {
        value: cdktf.listMapperHcl(mlplatformJupyterhubNetworksToHclTerraform, false)(this._networks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MlplatformJupyterhubNetworksList",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      s3fs_bucket: {
        value: cdktf.stringToHclTerraform(this._s3FsBucket),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: mlplatformJupyterhubTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MlplatformJupyterhubTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
